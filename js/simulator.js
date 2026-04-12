const STYLE_DEFAULT = "modern";

function tt(path) {
  const i = window.ZypheroI18n;
  if (i && typeof i.t === "function") {
    return i.t(path);
  }
  return path;
}

function waPhoneDigits() {
  const i = window.ZypheroI18n;
  if (i && typeof i.waPhoneDigits === "function") {
    return i.waPhoneDigits();
  }
  const c = typeof window !== "undefined" && window.ZypheroConfig && window.ZypheroConfig.waPhoneE164;
  return typeof c === "string" && /^\d{8,15}$/.test(c.trim()) ? c.trim() : "40747821384";
}

function getSelectedStyle() {
  const active = document.querySelector(".style-options button.active");
  return active && active.dataset.style ? active.dataset.style : STYLE_DEFAULT;
}

function ctaLabelForType(type) {
  const key = `preview.cta.${type}`;
  const label = tt(key);
  return label === key ? tt("preview.cta.default") : label;
}

function taglineForType(type) {
  const key = `preview.tagline.${type}`;
  const text = tt(key);
  return text === key ? tt("preview.tagline.default") : text;
}

const PREVIEW_CARD_SUFFIXES = ["a", "b", "c"];

function serviceCardLabels(type) {
  const keys = PREVIEW_CARD_SUFFIXES.map((s) => `preview.cards.${type}.${s}`);
  const fallbackKeys = PREVIEW_CARD_SUFFIXES.map((s) => `preview.cards.default.${s}`);
  return keys.map((key, i) => {
    const label = tt(key);
    if (label !== key) {
      return label;
    }
    return tt(fallbackKeys[i]);
  });
}

function typeLabelForPill(type) {
  const key = `gen.opt.${type}`;
  const label = tt(key);
  return label === key ? type : label;
}

function createPreviewCard(name, type, style, hue, description, address, phone, services) {
  const wrap = document.createElement("div");
  wrap.className = `preview-browser preview-style-${style}`;
  wrap.style.setProperty("--preview-hue", String(hue));

  const nav = document.createElement("div");
  nav.className = "preview-site-nav";
  const brand = document.createElement("span");
  brand.textContent = name.slice(0, 18) + (name.length > 18 ? "…" : "");
  const pill = document.createElement("span");
  pill.textContent = typeLabelForPill(type);
  nav.append(brand, pill);

  const hero = document.createElement("div");
  hero.className = "preview-hero";

  const title = document.createElement("h3");
  title.textContent = name;

  const sub = document.createElement("p");
  sub.className = "preview-hero-description";
  sub.textContent = description || taglineForType(type);

  const cta = document.createElement("a");
  cta.className = "preview-cta";
  cta.href = "#contact";
  cta.textContent = ctaLabelForType(type);

  hero.append(title, sub, cta);

  const about = document.createElement("div");
  about.className = "preview-about";
  const aboutTitle = document.createElement("strong");
  aboutTitle.textContent = "Despre noi";
  about.appendChild(aboutTitle);
  const aboutText = document.createElement("p");
  aboutText.textContent = description || `Suntem ${typeLabelForPill(type)} dedicat să oferim servicii de calitate superioară.`;
  about.appendChild(aboutText);

  const servicesSection = document.createElement("div");
  servicesSection.className = "preview-services-section";
  const servicesTitle = document.createElement("strong");
  servicesTitle.textContent = "Servicii";
  servicesSection.appendChild(servicesTitle);
  const cardsRow = document.createElement("div");
  cardsRow.className = "preview-cards";
  const serviceLabels = services ? services.split(",").map(s => s.trim()).filter(s => s) : serviceCardLabels(type);
  serviceLabels.slice(0, 4).forEach((text) => {
    const card = document.createElement("div");
    card.className = "preview-card";
    card.textContent = text;
    cardsRow.appendChild(card);
  });
  servicesSection.appendChild(cardsRow);

  const body = document.createElement("div");
  body.className = "preview-site-body";
  const strong = document.createElement("strong");
  strong.textContent = tt("preview.whyTitle");
  const ul = document.createElement("ul");
  ["preview.li1", "preview.li2", "preview.li3"].forEach((key) => {
    const li = document.createElement("li");
    li.textContent = tt(key);
    ul.appendChild(li);
  });
  body.append(strong, ul);

  const contact = document.createElement("div");
  contact.className = "preview-contact";
  const contactTitle = document.createElement("strong");
  contactTitle.textContent = "Contact";
  contact.appendChild(contactTitle);
  if (address) {
    const addr = document.createElement("p");
    addr.textContent = address;
    contact.appendChild(addr);
  }
  if (phone) {
    const tel = document.createElement("p");
    tel.textContent = phone;
    contact.appendChild(tel);
  }
  if (!address && !phone) {
    const placeholder = document.createElement("p");
    placeholder.textContent = "Contactați-ne pentru mai multe informații";
    contact.appendChild(placeholder);
  }

  const footer = document.createElement("div");
  footer.className = "preview-footer";
  footer.textContent = `© ${new Date().getFullYear()} ${name}`;

  wrap.append(nav, hero, about, servicesSection, body, contact, footer);
  return wrap;
}

function generateSite() {
  const nameInput = document.getElementById("siteName");
  const typeInput = document.getElementById("siteType");
  const colorInput = document.getElementById("siteColor");
  const descriptionInput = document.getElementById("siteDescription");
  const addressInput = document.getElementById("siteAddress");
  const phoneInput = document.getElementById("sitePhone");
  const servicesInput = document.getElementById("siteServices");
  const previewBox = document.getElementById("previewBox");
  const previewBoxMobile = document.getElementById("previewBoxMobile");

  if (!(nameInput && typeInput && previewBox)) {
    return;
  }

  const cleanName = nameInput.value.trim();
  const selectedType = typeInput.value;
  const hue = colorInput ? Number(colorInput.value) || 220 : 220;
  const style = getSelectedStyle();
  const description = descriptionInput ? descriptionInput.value.trim() : "";
  const address = addressInput ? addressInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const services = servicesInput ? servicesInput.value.trim() : "";

  previewBox.innerHTML = "";
  if (previewBoxMobile) {
    previewBoxMobile.innerHTML = "";
  }

  if (!cleanName) {
    const message = document.createElement("p");
    message.className = "form-status";
    message.style.margin = "auto";
    message.textContent = tt("gen.errorName");
    previewBox.appendChild(message);
    if (previewBoxMobile) {
      const messageMobile = message.cloneNode(true);
      previewBoxMobile.appendChild(messageMobile);
    }
    return;
  }

  const card = createPreviewCard(cleanName, selectedType, style, hue, description, address, phone, services);
  previewBox.appendChild(card);

  if (previewBoxMobile) {
    const cardMobile = card.cloneNode(true);
    previewBoxMobile.appendChild(cardMobile);
  }
}

function setupStylePills() {
  const pills = document.querySelectorAll(".style-options button");
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
    });
  });
}

function setupColorSlider() {
  const slider = document.getElementById("siteColor");
  const label = document.getElementById("siteColorValue");
  if (!(slider && label)) {
    return;
  }

  const sync = () => {
    label.textContent = `${slider.value}°`;
    const nameInput = document.getElementById("siteName");
    if (nameInput && nameInput.value.trim()) {
      generateSite();
    }
  };

  slider.addEventListener("input", sync);
  sync();
}

function setupRealTimeUpdates() {
  const inputs = [
    "siteName",
    "siteType",
    "siteDescription",
    "siteAddress",
    "sitePhone",
    "siteServices",
    "siteColor"
  ];

  inputs.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener("input", () => {
        const nameInput = document.getElementById("siteName");
        if (nameInput && nameInput.value.trim()) {
          generateSite();
        }
      });
    }
  });
}

function setupPreviewToggle() {
  const toggles = document.querySelectorAll(".preview-toggle");
  const devices = document.querySelectorAll(".preview-device");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const previewType = toggle.dataset.preview;

      toggles.forEach(t => t.classList.remove("preview-toggle--active"));
      toggle.classList.add("preview-toggle--active");

      devices.forEach(device => {
        device.classList.remove("preview-device--active");
      });

      const activeDevice = document.querySelector(`.preview-${previewType}`);
      if (activeDevice) {
        activeDevice.classList.add("preview-device--active");
      }
    });
  });
}

function setupExportButton() {
  const exportButton = document.getElementById("exportPreviewBtn");
  const previewBox = document.getElementById("previewBox");

  if (!exportButton || !previewBox) {
    return;
  }

  exportButton.addEventListener("click", () => {
    const nameInput = document.getElementById("siteName");
    const cleanName = nameInput ? nameInput.value.trim() : "";

    if (!cleanName) {
      alert(tt("gen.errorName"));
      return;
    }

    const previewContent = previewBox.innerHTML;
    const blob = new Blob([previewContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${cleanName.replace(/[^a-z0-9]/gi, "-").toLowerCase()}-preview.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

function setupRevealOnScroll() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

function setupNavHighlight() {
  const links = document.querySelectorAll(".nav-main a[data-nav-target]");
  if (!links.length || !("IntersectionObserver" in window)) {
    return;
  }

  const sections = [
    document.getElementById("home"),
    document.getElementById("services"),
    document.getElementById("results"),
    document.getElementById("simulator")
  ].filter(Boolean);

  const idToKey = {
    home: "home",
    services: "services",
    results: "results",
    simulator: "simulator"
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (!visible.length) {
        return;
      }
      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const key = idToKey[visible[0].target.id];
      if (!key) {
        return;
      }
      links.forEach((a) => {
        a.classList.toggle("is-active", a.dataset.navTarget === key);
      });
    },
    { threshold: [0.12, 0.22, 0.35, 0.55, 0.75, 1], rootMargin: "-18% 0px -32% 0px" }
  );

  sections.forEach((sec) => observer.observe(sec));
}

function setupLeadForm() {
  const form = document.getElementById("leadForm");
  const formStatus = document.getElementById("formStatus");

  if (!(form && formStatus)) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const business = String(formData.get("business") || "").trim();
    const goal = String(formData.get("goal") || "").trim();

    if (!name || !email || !business || !goal) {
      formStatus.textContent = tt("form.error");
      return;
    }

    const i = window.ZypheroI18n;
    const message = i && typeof i.interpolateFormWa === "function"
      ? i.interpolateFormWa({ name, email, business, goal })
      : [
          "Salut! Vreau o ofertă pentru website.",
          `Nume: ${name}`,
          `Email: ${email}`,
          `Business: ${business}`,
          `Obiectiv: ${goal}`
        ].join("\n");

    const whatsappUrl = `https://wa.me/${waPhoneDigits()}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener");
    formStatus.textContent = tt("form.success");
    form.reset();
  });
}

function setupLangRefreshPreview() {
  document.addEventListener("zyphero:langchange", () => {
    const previewBox = document.getElementById("previewBox");
    if (previewBox && previewBox.querySelector(".preview-browser")) {
      generateSite();
    }
  });
}

function boot() {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }

  setupRevealOnScroll();
  setupLeadForm();
  setupStylePills();
  setupColorSlider();
  setupNavHighlight();
  setupLangRefreshPreview();
  setupRealTimeUpdates();
  setupPreviewToggle();
  setupExportButton();

  const generatePreviewButton = document.getElementById("generatePreviewBtn");
  if (generatePreviewButton) {
    generatePreviewButton.addEventListener("click", generateSite);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
