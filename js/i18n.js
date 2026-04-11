(function () {
  const STORAGE_KEY = "zyphero-lang";

  function waPhoneDigits() {
    const c = typeof window !== "undefined" && window.ZypheroConfig && window.ZypheroConfig.waPhoneE164;
    return typeof c === "string" && /^\d{8,15}$/.test(c.trim()) ? c.trim() : "40747821384";
  }

  const STRINGS = {
    ro: {
      meta: {
        title: "ZypheroLab | Web design care aduce clienți",
        description:
          "ZypheroLab construiește website-uri rapide, orientate pe conversie, SEO și căutări AI. Design modern, performanță și lead-uri reale.",
        ogTitle: "ZypheroLab | Website-uri care aduc clienți",
        ogDescription:
          "Website-uri rapide, clare și orientate pe conversie, optimizate pentru Google și căutări AI.",
        twitterTitle: "ZypheroLab | Website-uri pentru creștere",
        twitterDescription: "SEO, performanță și UX pentru mai multe lead-uri."
      },
      skip: "Sari la conținut",
      brand: {
        aria: "ZypheroLab — Acasă"
      },
      darkMode: {
        aria: "Comută dark mode"
      },
      nav: {
        aria: "Navigare principală",
        home: "Acasă",
        services: "Servicii",
        portfolio: "Portofoliu",
        simulator: "Simulator",
        contact: "Contact"
      },
      lang: { switchAria: "Limba site-ului", ro: "Română", en: "Engleză" },
      header: { cta: "Cere ofertă" },
      hero: {
        title: "Construim website-uri care îți aduc clienți",
        tagline: "Preview instant. Rezultate reale.",
        lead: "",
        ctaSim: "Încearcă simulatorul live",
        ctaStart: "Vezi portofoliu",
        visualPlaceholder: "Simulatorul va apărea aici"
      },
      facts: {
        title: "Date rapide pentru Google și motoare AI",
        li1: "ZypheroLab proiectează website-uri orientate pe conversie pentru IMM-uri.",
        li2: "Stack-ul urmărește performanța, accesibilitatea și conținut ușor de citat.",
        li3: "Optimizăm HTML semantic, schema markup, FAQ și claritatea mesajului.",
        li4: "CTA-urile sunt construite pentru contact direct: formular + WhatsApp."
      },
      services: {
        title: "Servicii",
        c1t: "Website rapid",
        c1p: "Structură modernă, încărcare rapidă și experiență impecabilă pe mobil.",
        c2t: "SEO + vizibilitate AI",
        c2p: "Meta, schema, FAQ și conținut clar pentru căutări clasice și asistate de AI.",
        c3t: "Conversie",
        c3p: "CTA-uri testabile, formular orientat pe lead-uri și mesaje care reduc fricțiunea."
      },
      offer: {
        title: "Ofertă clară pentru start rapid",
        lead: "Pachet Start: landing page + formular lead + setup SEO de bază + analytics.",
        li1: "Audit de business și mesaj principal",
        li2: "Design orientat pe conversie",
        li3: "Implementare tehnică + indexare",
        li4: "Recomandări pentru iterații lunare",
        cta: "Vreau pachetul Start"
      },
      pricing: {
        title: "Preturi transparente",
        popular: "Cel mai popular",
        start: {
          title: "Pachet Start",
          price: "1.500 RON",
          f1: "Landing page completă",
          f2: "SEO tehnic de bază",
          f3: "Formular lead + WhatsApp",
          f4: "Lansat în 3-5 zile",
          f5: "Suport email 30 zile",
          cta: "Vreau pachetul Start"
        },
        growth: {
          title: "Pachet Growth",
          price: "3.500 RON",
          f1: "Website multi-pagină",
          f2: "SEO tehnic avansat",
          f3: "Analytics + rapoarte lunare",
          f4: "Lansat în 5-7 zile",
          f5: "Suport prioritar 3 luni",
          cta: "Vreau pachetul Growth"
        },
        custom: {
          title: "Proiect Custom",
          price: "La cerere",
          f1: "Soluție personalizată",
          f2: "E-commerce sau aplicație",
          f3: "Integrări API",
          f4: "Timeline flexibil",
          f5: "Suport dedicat",
          cta: "Cere ofertă"
        }
      },
      portfolio: {
        title: "Portofoliu — studii de caz",
        c1t: "Firmă servicii locale",
        c1p: "Redesign + SEO on-page. Rezultat: creștere trafic organic și lead-uri mai calificate.",
        c1m: "+68% cereri în 90 zile",
        c2t: "Restaurant urban",
        c2p: "Landing orientat pe rezervări mobile și viteză ridicată.",
        c2m: "+41% rezervări online"
      },
      testimonials: {
        title: "Ce spun clienții",
        quote: "„Mesajul e clar, site-ul e rapid, iar lead-urile au crescut în prima lună.”",
        cite: "— Andrei, antreprenor local"
      },
      gen: {
        title: "Generator website AI",
        labelName: "Nume business",
        phName: "Introdu numele",
        labelType: "Tip business",
        labelColor: "Culoare principală",
        colorHint: "Alege nuanța culorii accent pentru preview, de la 0 la 360 grade.",
        labelStyle: "Stil",
        btnGenerate: "Generează preview site",
        previewRegion: "Previzualizare concept site",
        phPreview: "Apasă „Generează preview site” pentru a vedea conceptul.",
        footText: "Vezi cum arată site-ul în ~30 de secunde — preview AI instant pentru business-ul tău.",
        footCta: "Vreau acest site",
        errorName: "Te rugăm să introduci numele business-ului.",
        opt: {
          restaurant: "Restaurant",
          barber: "Frizerie",
          agency: "Agenție",
          services: "Servicii",
          ecommerce: "E-commerce"
        }
      },
      faq: {
        title: "Întrebări frecvente",
        q1: "În cât timp primesc prima versiune?",
        a1: "În mod normal în 3–5 zile lucrătoare pentru un draft funcțional.",
        q2: "Pot fi găsit mai bine în căutări AI?",
        a2: "Da, prin structură semantică, date clare despre business, schema și conținut ușor de referit.",
        q3: "Ce primesc după lansare?",
        a3: "Checklist de optimizare continuă, monitorizare KPI și recomandări de creștere."
      },
      contact: {
        title: "Solicită o discuție gratuită",
        name: "Nume",
        phName: "Numele tău",
        email: "Email",
        phEmail: "email@firma.ro",
        business: "Business",
        phBusiness: "Numele business-ului",
        goal: "Obiectiv principal",
        phGoal: "Ex: mai multe lead-uri din Google",
        submit: "Trimite cererea"
      },
      form: {
        error: "Completează toate câmpurile obligatorii.",
        success: "Perfect! Am pregătit mesajul pe WhatsApp.",
        waLines: "Salut! Vreau o ofertă pentru website.\nNume: {{name}}\nEmail: {{email}}\nBusiness: {{business}}\nObiectiv: {{goal}}"
      },
      footer: {
        line: "Website-uri de creștere pentru business-uri locale.",
        faq: "Întrebări frecvente",
        contact: "Contact"
      },
      float: { wa: "Discuție pe WhatsApp", chat: "Solicită ofertă" },
      wa: { preset: "Bună, vreau o ofertă pentru website." },
      noscript: "Acest website funcționează mai bine cu JavaScript activat.",
      preview: {
        whyTitle: "De ce să ne alegi",
        li1: "Design adaptat pe mobil",
        li2: "Încărcare rapidă",
        li3: "Mesaj clar pentru clienți",
        cta: {
          restaurant: "Rezervă o masă",
          barber: "Rezervă servicii",
          agency: "Programează un call",
          services: "Cere ofertă",
          ecommerce: "Vezi produsele",
          default: "Contactează-ne"
        },
        tagline: {
          restaurant: "Experiență urbană, preparate proaspete și atmosferă memorabilă.",
          barber: "Stil, precizie și servicii premium pentru look-ul tău.",
          agency: "Strategie, design și execuție pentru branduri care cresc.",
          services: "Soluții clare, livrare rapidă și suport dedicat.",
          ecommerce: "Magazin rapid, plăți sigure și experiență fluidă pe mobil.",
          default: "Mesaj clar, viteză mare și conversii mai bune."
        },
        cards: {
          restaurant: { a: "Meniu", b: "Rezervări", c: "Livrare" },
          barber: { a: "Tunsoare", b: "Barbă", c: "Programare" },
          agency: { a: "Web design", b: "Dezvoltare", c: "SEO" },
          services: { a: "Consultanță", b: "Implementare", c: "Suport" },
          ecommerce: { a: "Catalog", b: "Livrare", c: "Plăți" },
          default: { a: "Servicii", b: "Portofoliu", c: "Contact" }
        }
      }
    },
    en: {
      meta: {
        title: "ZypheroLab | Web design that brings you clients",
        description:
          "ZypheroLab builds fast, conversion-focused websites with SEO and AI search visibility. Modern design, performance, and real leads.",
        ogTitle: "ZypheroLab | Websites that bring you clients",
        ogDescription:
          "Fast, clear, conversion-focused websites optimized for Google and AI-assisted search.",
        twitterTitle: "ZypheroLab | Websites built for growth",
        twitterDescription: "SEO, performance, and UX for more qualified leads."
      },
      skip: "Skip to content",
      brand: { aria: "ZypheroLab — Home" },
      darkMode: {
        aria: "Toggle dark mode"
      },
      nav: { aria: "Main navigation", home: "Home", services: "Services", portfolio: "Portfolio", simulator: "Simulator" },
      lang: { switchAria: "Site language", ro: "Romanian", en: "English" },
      header: { cta: "Get a Quote" },
      hero: {
        title: "We Build Websites That Bring You Clients",
        tagline: "Instant previews. Real results.",
        lead: "Fast pages, a clear message, and optimization for Google and AI search — so you get steady leads.",
        ctaSim: "Try Live Simulator",
        ctaStart: "View Portfolio",
        visualPlaceholder: "Simulator will appear here"
      },
      facts: {
        title: "Quick signals for Google and AI engines",
        li1: "ZypheroLab designs conversion-focused websites for SMBs.",
        li2: "Our stack prioritizes performance, accessibility, and easy-to-quote content.",
        li3: "We optimize semantic HTML, schema markup, FAQs, and message clarity.",
        li4: "CTAs are built for direct contact: form + WhatsApp."
      },
      services: {
        title: "Services",
        c1t: "Fast websites",
        c1p: "Modern structure, quick load times, and a polished mobile experience.",
        c2t: "SEO + AI visibility",
        c2p: "Meta, schema, FAQs, and clear copy for classic and AI-assisted search.",
        c3t: "Conversion",
        c3p: "Testable CTAs, lead-focused forms, and copy that reduces friction."
      },
      offer: {
        title: "A clear offer for a fast start",
        lead: "Starter pack: landing page + lead form + baseline SEO setup + analytics.",
        li1: "Business audit and core message",
        li2: "Conversion-oriented design",
        li3: "Technical build + indexing",
        li4: "Recommendations for monthly iterations",
        cta: "I want the Starter pack"
      },
      pricing: {
        title: "Transparent Pricing",
        popular: "Most Popular",
        start: {
          title: "Starter Pack",
          price: "1,500 RON",
          f1: "Complete landing page",
          f2: "Baseline technical SEO",
          f3: "Lead form + WhatsApp",
          f4: "Launched in 3-5 days",
          f5: "Email support 30 days",
          cta: "I want the Starter pack"
        },
        growth: {
          title: "Growth Pack",
          price: "3,500 RON",
          f1: "Multi-page website",
          f2: "Advanced technical SEO",
          f3: "Analytics + monthly reports",
          f4: "Launched in 5-7 days",
          f5: "Priority support 3 months",
          cta: "I want the Growth pack"
        },
        custom: {
          title: "Custom Project",
          price: "On request",
          f1: "Custom solution",
          f2: "E-commerce or application",
          f3: "API integrations",
          f4: "Flexible timeline",
          f5: "Dedicated support",
          cta: "Get a quote"
        }
      },
      portfolio: {
        title: "Portfolio — case studies",
        c1t: "Local services company",
        c1p: "Redesign + on-page SEO. Result: more organic traffic and better-qualified leads.",
        c1m: "+68% inquiries in 90 days",
        c2t: "Urban restaurant",
        c2p: "Mobile-first landing focused on reservations and speed.",
        c2m: "+41% online reservations"
      },
      testimonials: {
        title: "What clients say",
        quote: "“The message is clear, the site is fast, and leads grew in the first month.”",
        cite: "— Andrei, local business owner"
      },
      gen: {
        title: "AI website generator",
        labelName: "Business name",
        phName: "Enter your name",
        labelType: "Business type",
        labelColor: "Primary color",
        colorHint: "Pick the accent hue for the preview, from 0 to 360 degrees.",
        labelStyle: "Style",
        btnGenerate: "Generate website preview",
        previewRegion: "Live website preview",
        phPreview: "Click “Generate preview” to see the concept.",
        footText: "See your site in ~30 seconds — an instant AI preview for your business.",
        footCta: "I want this website",
        errorName: "Please enter your business name.",
        opt: {
          restaurant: "Restaurant",
          barber: "Barber shop",
          agency: "Agency",
          services: "Services",
          ecommerce: "E-commerce"
        }
      },
      faq: {
        title: "Frequently asked questions",
        q1: "How soon do I get the first version?",
        a1: "Typically within 3–5 business days for a functional draft.",
        q2: "Can I rank better in AI search results?",
        a2: "Yes—through semantic structure, clear business facts, schema, and easy-to-reference content.",
        q3: "What do I get after launch?",
        a3: "A continuous optimization checklist, KPI monitoring, and growth recommendations."
      },
      contact: {
        title: "Book a free call",
        name: "Name",
        phName: "Your name",
        email: "Email",
        phEmail: "you@company.com",
        business: "Business",
        phBusiness: "Business name",
        goal: "Main goal",
        phGoal: "e.g. more leads from Google",
        submit: "Send request"
      },
      form: {
        error: "Please fill in all required fields.",
        success: "Done—we prepared your WhatsApp message.",
        waLines: "Hi! I’d like a quote for a website.\nName: {{name}}\nEmail: {{email}}\nBusiness: {{business}}\nGoal: {{goal}}"
      },
      footer: {
        line: "Growth websites for local businesses.",
        faq: "FAQ",
        contact: "Contact"
      },
      float: { wa: "Chat on WhatsApp", chat: "Request a quote" },
      wa: { preset: "Hi, I’d like a quote for a website." },
      noscript: "This site works best with JavaScript enabled.",
      preview: {
        whyTitle: "Why choose us",
        li1: "Mobile-friendly design",
        li2: "Fast loading",
        li3: "Clear message for customers",
        cta: {
          restaurant: "Book a table",
          barber: "Book a service",
          agency: "Schedule a call",
          services: "Get a quote",
          ecommerce: "View products",
          default: "Contact us"
        },
        tagline: {
          restaurant: "Urban dining, fresh plates, and a memorable vibe.",
          barber: "Style, precision, and premium care for your look.",
          agency: "Strategy, design, and execution for brands that grow.",
          services: "Clear solutions, fast delivery, and dedicated support.",
          ecommerce: "A fast store, secure payments, and a smooth mobile flow.",
          default: "A clear message, high speed, and stronger conversions."
        },
        cards: {
          restaurant: { a: "Menu", b: "Reservations", c: "Delivery" },
          barber: { a: "Haircut", b: "Beard trim", c: "Book appointment" },
          agency: { a: "Web design", b: "Development", c: "SEO" },
          services: { a: "Consulting", b: "Delivery", c: "Support" },
          ecommerce: { a: "Catalog", b: "Shipping", c: "Checkout" },
          default: { a: "Services", b: "Portfolio", c: "Contact" }
        }
      }
    }
  };

  let currentLang = "ro";

  function get(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  }

  function t(path) {
    const v = get(STRINGS[currentLang], path);
    if (typeof v === "string") {
      return v;
    }
    const fallback = get(STRINGS.ro, path);
    return typeof fallback === "string" ? fallback : path;
  }

  function interpolate(template, vars) {
    return template.replace(/\{\{(\w+)\}\}/g, (_, k) => (vars[k] !== undefined ? String(vars[k]) : ""));
  }

  function normalizePathname(pathname) {
    let p = pathname || "/";
    p = p.replace(/\/index\.html$/i, "");
    if (p.length > 1 && p.endsWith("/")) {
      p = p.slice(0, -1);
    }
    return p || "/";
  }

  function pathImpliesEn() {
    try {
      const p = normalizePathname(window.location.pathname);
      return p === "/en";
    } catch {
      return false;
    }
  }

  function detectInitialLang() {
    try {
      const params = new URLSearchParams(window.location.search);
      const q = params.get("lang");
      if (q === "en" || q === "ro") {
        return q;
      }
    } catch {
      /* ignore */
    }
    if (pathImpliesEn()) {
      return "en";
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "ro") {
        return stored;
      }
    } catch {
      /* ignore */
    }
    if (navigator.language && navigator.language.toLowerCase().startsWith("en")) {
      return "en";
    }
    return "ro";
  }

  function setMeta(selector, attr, value) {
    const el = document.querySelector(selector);
    if (el) {
      el.setAttribute(attr, value);
    }
  }

  function setLinkHref(selector, href) {
    const el = document.querySelector(selector);
    if (el) {
      el.setAttribute("href", href);
    }
  }

  function applyMeta() {
    document.title = t("meta.title");
    const baseUrl = "https://zypherolab.com";
    const pageUrl = currentLang === "en" ? `${baseUrl}/en/` : `${baseUrl}/`;
    setLinkHref('link[rel="canonical"]', pageUrl);
    setMeta('meta[property="og:url"]', "content", pageUrl);
    setMeta('meta[name="description"]', "content", t("meta.description"));
    setMeta('meta[property="og:title"]', "content", t("meta.ogTitle"));
    setMeta('meta[property="og:description"]', "content", t("meta.ogDescription"));
    setMeta('meta[name="twitter:title"]', "content", t("meta.twitterTitle"));
    setMeta('meta[name="twitter:description"]', "content", t("meta.twitterDescription"));
    setMeta('meta[property="og:locale"]', "content", currentLang === "en" ? "en_US" : "ro_RO");
    setMeta('meta[property="og:locale:alternate"]', "content", currentLang === "en" ? "ro_RO" : "en_US");
  }

  function normalizeUrlToPathLang() {
    try {
      const p = normalizePathname(window.location.pathname);
      const onEnPath = p === "/en";
      const onRoot = p === "/";
      const hash = window.location.hash || "";
      if (currentLang === "en" && onRoot) {
        window.history.replaceState({}, "", "/en/" + hash);
      } else if (currentLang === "ro" && onEnPath) {
        window.history.replaceState({}, "", "/" + hash);
      }
    } catch {
      /* ignore */
    }
  }

  function applyDomStrings() {
    document.documentElement.lang = currentLang === "en" ? "en" : "ro";

    const langGroup = document.querySelector(".lang-switch");
    if (langGroup) {
      langGroup.setAttribute("aria-label", t("lang.switchAria"));
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) {
        el.textContent = t(key);
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key && "placeholder" in el) {
        el.placeholder = t(key);
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key) {
        el.setAttribute("aria-label", t(key));
      }
    });

    const wa = document.querySelector("a.whatsapp");
    if (wa) {
      const text = t("wa.preset");
      wa.href = `https://wa.me/${waPhoneDigits()}?text=${encodeURIComponent(text)}`;
    }

    document.querySelectorAll("select[data-i18n-options] option").forEach((opt) => {
      const key = opt.getAttribute("data-i18n");
      if (key) {
        opt.textContent = t(key);
      }
    });
  }

  function updateLangButtons() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const l = btn.getAttribute("data-lang");
      btn.classList.toggle("is-active", l === currentLang);
      btn.setAttribute("aria-pressed", l === currentLang ? "true" : "false");
    });
  }

  function syncUrl() {
    try {
      const hash = window.location.hash || "";
      if (currentLang === "en") {
        window.history.replaceState({}, "", "/en/" + hash);
      } else {
        window.history.replaceState({}, "", "/" + hash);
      }
    } catch {
      /* ignore */
    }
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "ro") {
      return;
    }
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    syncUrl();
    applyMeta();
    applyDomStrings();
    updateLangButtons();
    document.dispatchEvent(new CustomEvent("zyphero:langchange", { detail: { lang } }));
  }

  function bindLangSwitch() {
    const group = document.querySelector(".lang-switch");
    if (!group) {
      return;
    }
    group.querySelectorAll(".lang-btn").forEach((btn) => {
      const code = btn.getAttribute("data-lang");
      const labelKey = code === "en" ? "lang.en" : "lang.ro";
      btn.setAttribute("aria-label", t(labelKey));
      btn.addEventListener("click", () => setLang(code === "en" ? "en" : "ro"));
    });
  }

  function init() {
    currentLang = detectInitialLang();
    normalizeUrlToPathLang();
    bindLangSwitch();
    applyMeta();
    applyDomStrings();
    updateLangButtons();
  }

  window.ZypheroI18n = {
    init,
    setLang,
    waPhoneDigits,
    get lang() {
      return currentLang;
    },
    t,
    interpolateFormWa(vars) {
      return interpolate(t("form.waLines"), vars);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
