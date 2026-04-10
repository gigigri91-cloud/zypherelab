const STYLE_DEFAULT = "modern";

function tt(path) {
  const i = window.ZypheroI18n;
  if (i && typeof i.t === "function") {
    return i.t(path);
  }
  return path;
}

function getSelectedStyle() {
  const active = document.querySelector(".style-pill.is-active");
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

function typeLabelForPill(type) {
  const key = `gen.opt.${type}`;
  const label = tt(key);
  return label === key ? type : label;
}

function createPreviewCard(name, type, style, hue) {
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
  sub.textContent = taglineForType(type);

  const cta = document.createElement("a");
  cta.className = "preview-cta";
  cta.href = "#contact";
  cta.textContent = ctaLabelForType(type);

  hero.append(title, sub, cta);

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

  wrap.append(nav, hero, body);
  return wrap;
}

function generateSite() {
  const nameInput = document.getElementById("siteName");
  const typeInput = document.getElementById("siteType");
  const colorInput = document.getElementById("siteColor");
  const previewBox = document.getElementById("previewBox");

  if (!(nameInput && typeInput && previewBox)) {
    return;
  }

  const cleanName = nameInput.value.trim();
  const selectedType = typeInput.value;
  const hue = colorInput ? Number(colorInput.value) || 220 : 220;
  const style = getSelectedStyle();

  previewBox.innerHTML = "";

  if (!cleanName) {
    const message = document.createElement("p");
    message.className = "form-status";
    message.style.margin = "auto";
    message.textContent = tt("gen.errorName");
    previewBox.appendChild(message);
    return;
  }

  previewBox.appendChild(createPreviewCard(cleanName, selectedType, style, hue));
}

function setupStylePills() {
  const pills = document.querySelectorAll(".style-pill");
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("is-active"));
      pill.classList.add("is-active");
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
  };

  slider.addEventListener("input", sync);
  sync();
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

    const whatsappUrl = `https://wa.me/40700000000?text=${encodeURIComponent(message)}`;
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

window.addEventListener("load", () => {
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

  const generatePreviewButton = document.getElementById("generatePreviewBtn");
  if (generatePreviewButton) {
    generatePreviewButton.addEventListener("click", generateSite);
  }
});
