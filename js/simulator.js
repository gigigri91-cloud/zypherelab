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
  aboutTitle.textContent = tt("preview.section.about");
  about.appendChild(aboutTitle);
  const aboutText = document.createElement("p");
  aboutText.textContent = description || `Suntem ${typeLabelForPill(type)} dedicat să oferim servicii de calitate superioară.`;
  about.appendChild(aboutText);

  const servicesSection = document.createElement("div");
  servicesSection.className = "preview-services-section";
  const servicesTitle = document.createElement("strong");
  servicesTitle.textContent = tt("preview.section.services");
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
  contactTitle.textContent = tt("preview.section.contact");
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
    placeholder.textContent = tt("preview.section.contactPlaceholder");
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
      // Regenerate preview if one has already been generated
      const nameInput = document.getElementById("siteName");
      if (nameInput && nameInput.value.trim()) {
        generateSite();
      }
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

function throttle(fn, delay) {
  let timeoutId = null;
  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
      timeoutId = null;
    }, delay);
  };
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

  const throttledGenerate = throttle(() => {
    const nameInput = document.getElementById("siteName");
    if (nameInput && nameInput.value.trim()) {
      generateSite();
    }
  }, 150);

  inputs.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      const eventName = input.tagName === "SELECT" ? "change" : "input";
      input.addEventListener(eventName, throttledGenerate);
    }
  });
}

function setupPreviewToggle() {
  const toggles = document.querySelectorAll(".preview-toggle");
  const devices = document.querySelectorAll(".preview-device");
  const deviceClassMap = {
    desktop: "preview-laptop",
    mobile: "preview-mobile"
  };

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const previewType = toggle.dataset.preview;

      toggles.forEach(t => t.classList.remove("preview-toggle--active"));
      toggle.classList.add("preview-toggle--active");

      devices.forEach(device => {
        device.classList.remove("preview-device--active");
      });

      const targetClass = deviceClassMap[previewType];
      const activeDevice = targetClass
        ? document.querySelector(`.${targetClass}`)
        : null;
      if (activeDevice) activeDevice.classList.add("preview-device--active");
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

    const previewContent = document.getElementById("previewBox").innerHTML;
    if (!previewContent || !previewContent.includes("preview-browser")) {
      alert(tt("gen.errorNoPreview") || "Generează mai întâi un preview.");
      return;
    }

    // Fetch the preview CSS from the stylesheet
    const styleEl = Array.from(document.styleSheets)
      .flatMap(s => { try { return Array.from(s.cssRules); } catch (e) { return []; } })
      .filter(r => r.cssText && r.cssText.includes("preview-"))
      .map(r => r.cssText)
      .join("\n");

    const html = `<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${cleanName} — Preview ZypheroLab</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Inter, sans-serif; padding: 2rem; background: #f8fafc; }
    ${styleEl}
  </style>
</head>
<body>
  ${previewContent}
</body>
</html>`;

    const blob = new Blob([html], { type: "text/html" });
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
  const formspreeEndpoint = "https://formspree.io/f/xzdyzdpn";

  if (!(form && formStatus)) {
    return;
  }

  const fieldIds = ["name", "email", "business", "goal"];
  const fallbackRequired = tt("form.errorRequired");
  const requiredMessage = fallbackRequired === "form.errorRequired"
    ? "Completează acest câmp."
    : fallbackRequired;
  const fallbackEmail = tt("form.errorEmail");
  const emailMessage = fallbackEmail === "form.errorEmail"
    ? "Introdu o adresă de email validă."
    : fallbackEmail;

  function getField(id) {
    return document.getElementById(id);
  }

  function getErrorNode(fieldId) {
    const input = getField(fieldId);
    if (!input) {
      return null;
    }
    let node = document.getElementById(`${fieldId}-error`);
    if (!node) {
      node = document.createElement("p");
      node.id = `${fieldId}-error`;
      node.className = "form-field-error";
      node.style.marginTop = "0.35rem";
      node.style.fontSize = "0.85rem";
      node.style.color = "#dc2626";
      const group = input.closest(".field-group");
      if (group) {
        group.appendChild(node);
      }
    }
    return node;
  }

  function setFieldError(fieldId, message) {
    const input = getField(fieldId);
    const errorNode = getErrorNode(fieldId);
    if (!input || !errorNode) {
      return;
    }
    errorNode.textContent = message;
    input.setAttribute("aria-invalid", "true");
    const describedBy = input.getAttribute("aria-describedby");
    const ids = describedBy ? describedBy.split(/\s+/).filter(Boolean) : [];
    if (!ids.includes(errorNode.id)) {
      ids.push(errorNode.id);
    }
    input.setAttribute("aria-describedby", ids.join(" "));
  }

  function clearFieldError(fieldId) {
    const input = getField(fieldId);
    const errorNode = document.getElementById(`${fieldId}-error`);
    if (errorNode) {
      errorNode.textContent = "";
    }
    if (input) {
      input.removeAttribute("aria-invalid");
      const describedBy = input.getAttribute("aria-describedby");
      if (describedBy) {
        const ids = describedBy
          .split(/\s+/)
          .filter((id) => id && id !== `${fieldId}-error`);
        if (ids.length) {
          input.setAttribute("aria-describedby", ids.join(" "));
        } else {
          input.removeAttribute("aria-describedby");
        }
      }
    }
  }

  function clearAllFieldErrors() {
    fieldIds.forEach(clearFieldError);
  }

  fieldIds.forEach((id) => {
    const input = getField(id);
    if (input) {
      input.addEventListener("input", () => {
        clearFieldError(id);
      });
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearAllFieldErrors();
    formStatus.textContent = "";

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const business = String(formData.get("business") || "").trim();
    const goal = String(formData.get("goal") || "").trim();

    const missing = [];
    if (!name) missing.push("name");
    if (!email) missing.push("email");
    if (!business) missing.push("business");
    if (!goal) missing.push("goal");

    if (missing.length) {
      missing.forEach((id) => setFieldError(id, requiredMessage));
      formStatus.textContent = tt("form.error");
      return;
    }

    const emailInput = getField("email");
    if (emailInput && !emailInput.checkValidity()) {
      setFieldError("email", emailMessage);
      formStatus.textContent = tt("form.error");
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        try {
          const payload = await response.json();
          const errors = payload && Array.isArray(payload.errors) ? payload.errors : [];
          errors.forEach((err) => {
            if (err && err.field && fieldIds.includes(err.field)) {
              setFieldError(err.field, err.message || tt("form.error"));
            }
          });
        } catch (parseError) {
          // Ignore response parsing errors and fallback to generic status message.
        }
        formStatus.textContent = tt("form.error");
        return;
      }

      formStatus.textContent = tt("form.success");
      form.reset();
    } catch (error) {
      formStatus.textContent = tt("form.error");
    }
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
