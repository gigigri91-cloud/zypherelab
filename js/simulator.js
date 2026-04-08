function createPreviewCard(name, type) {
  const container = document.createElement("div");
  container.className = "preview-card";

  const title = document.createElement("h3");
  title.textContent = name;

  const subtitle = document.createElement("p");
  subtitle.textContent = `Concept initial pentru ${type}.`;

  const cta = document.createElement("a");
  cta.className = "btn";
  cta.href = "#contact";
  cta.textContent = "Solicita varianta finala";

  container.append(title, subtitle, cta);
  return container;
}

function generateSite() {
  const nameInput = document.getElementById("siteName");
  const typeInput = document.getElementById("siteType");
  const previewBox = document.getElementById("previewBox");

  if (!(nameInput && typeInput && previewBox)) {
    return;
  }

  const cleanName = nameInput.value.trim();
  const selectedType = typeInput.value;

  previewBox.innerHTML = "";

  if (!cleanName) {
    const message = document.createElement("p");
    message.className = "form-status";
    message.textContent = "Te rugam sa introduci numele business-ului.";
    previewBox.appendChild(message);
    return;
  }

  previewBox.appendChild(createPreviewCard(cleanName, selectedType));
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
      formStatus.textContent = "Completeaza toate campurile obligatorii.";
      return;
    }

    const message = [
      "Salut! Vreau o oferta pentru website.",
      `Nume: ${name}`,
      `Email: ${email}`,
      `Business: ${business}`,
      `Obiectiv: ${goal}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/40700000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener");
    formStatus.textContent = "Perfect! Am pregatit mesajul pe WhatsApp.";
    form.reset();
  });
}

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }

  setupRevealOnScroll();
  setupLeadForm();

  const generatePreviewButton = document.getElementById("generatePreviewBtn");
  if (generatePreviewButton) {
    generatePreviewButton.addEventListener("click", generateSite);
  }
});