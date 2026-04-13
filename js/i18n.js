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
        title: "Website-uri moderne pentru afaceri românești care vor clienți noi",
        subtitle: "Rapide, optimizate pentru conversie. De la 300€ landing → 600€ site complet.",
        tagline: "Schițe în 3-5 zile | 3 luni suport gratuit",
        cta1: "Ofertă WhatsApp",
        cta2: "Vezi lucrări",
        t1: "100% Mobile",
        t2: "SEO Ready",
        t3: "Suport Gratuit"
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
          price: "300 €",
          f1: "Landing page completă",
          f2: "SEO tehnic de bază",
          f3: "Formular lead + WhatsApp",
          f4: "Lansat în 3-5 zile",
          f5: "Suport email 30 zile",
          cta: "Vreau pachetul Start"
        },
        growth: {
          title: "Pachet Growth",
          price: "600 €",
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
        },
        subscription: {
          title: "Abonamente lunare",
          subtitle: "Suport continuu pentru creștere",
          maintenance: {
            title: "Mentenanță",
            price: "50 € / lună",
            f1: "Backup zilnic",
            f2: "Updates de securitate",
            f3: "Monitorizare uptime",
            f4: "Bug fixes minori",
            cta: "Abonare"
          },
          support: {
            title: "Suport Prioritar",
            price: "100 € / lună",
            f1: "Răspuns în 2 ore",
            f2: "Modificări incluse",
            f3: "Consultanță tehnică",
            f4: "Prioritate la updates",
            cta: "Abonare"
          },
          content: {
            title: "Updates Conținut",
            price: "30 € / lună",
            f1: "Modificări text",
            f2: "Adaugare articole",
            f3: "Actualizare imagini",
            f4: "SEO on-page",
            cta: "Abonare"
          }
        }
      },
      portfolio: {
        title: "Portofoliu — proiecte web design",
        project1: {
          title: "Landing Restaurant",
          desc: "Design modern pentru restaurant cu sistem de rezervări integrat. Optimizat pentru mobil.",
          link: "Vezi studiu de caz"
        },
        project2: {
          title: "Site Cabinet Avocat",
          desc: "Prezență online profesională cu formular de programare și SEO local.",
          link: "Vezi studiu de caz"
        },
        project3: {
          title: "Redesign E-commerce",
          desc: "Optimizare conversie pentru magazin online. +40% vânzări după redesign.",
          link: "Vezi studiu de caz"
        },
        project4: {
          title: "Portofoliu Freelancer",
          desc: "Site personal cu galerie de proiecte și formular de contact. Design minimalist.",
          link: "Vezi studiu de caz"
        },
        project5: {
          title: "Demo Generator Site",
          desc: "Simulator interactiv vanilla JS. Alege tip business, vezi preview instant.",
          link: "Încearcă demo"
        }
      },
      process: {
        title: "Cum lucrăm",
        step1: "Discuție brief",
        step1desc: "Aflăm obiectivele, publicul țintă și mesajul principal.",
        step2: "Wireframe",
        step2desc: "Aprobăm structura și fluxul înainte de design final.",
        step3: "Build + Test",
        step3desc: "Dezvoltare rapidă, testare pe toate dispozitivele.",
        step4: "Lansare + Suport",
        step4desc: "Publicare, monitorizare și 3 luni suport inclus."
      },
      about: {
        title: "Despre mine",
        intro: "Web designer freelancer din București. Livrez rapid pentru afaceri mici și mijlocii din România.",
        cta: "Hai să discutăm"
      },
      testimonials: {
        title: "Ce spun clienții",
        cristi: {
          text: "„Am colaborat cu ZypheroLab pentru toate cele 5 proiecte din portofoliul meu și sunt extrem de mulțumit de fiecare site creat. Echipa a înțeles perfect nevoile mele de la prima discuție și a livrat site-uri rapide, moderne și optimizate pentru conversie. Recomand cu încredere!\"",
          author: "— Cristi, proprietar 5 proiecte"
        },
        maria: {
          text: "„Site-ul restaurantului meu a crescut vânzările cu 30% în prima lună. Design-ul este exact ce îmi trebuia - modern, rapid și ușor de folosit pe telefon.\"",
          author: "— Maria, proprietar restaurant"
        },
        andrei: {
          text: "„Profesionalism și livrare rapidă. Cabinetul meu de avocatură are acum o prezență online care aduce clienți noi în fiecare lună.\"",
          author: "— Andrei, avocat"
        }
      },
      gen: {
        title: "Generator website AI",
        labelName: "Nume business",
        phName: "Introdu numele",
        labelDescription: "Descriere scurtă",
        phDescription: "Descrie în câteva cuvinte business-ul tău",
        labelAddress: "Adresă",
        phAddress: "Strada, numărul, orașul",
        labelPhone: "Telefon",
        phPhone: "07XX XXX XXX",
        labelServices: "Servicii principale (separate prin virgulă)",
        phServices: "Ex: Web design, SEO, Marketing",
        labelColor: "Culoare principală",
        colorHint: "Alege nuanța culorii accent pentru preview, de la 0 la 360 grade.",
        labelStyle: "Stil",
        btnGenerate: "Generează preview site",
        btnExport: "Exportă preview",
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
        title: "Întrebări frecvente — web design",
        q1: "Cât costă un website?",
        a1: "Landing page de la 300€, site complet 5 pagini de la 600€. Prețul final depinde de funcționalități și complexitate.",
        q2: "În cât timp e gata site-ul?",
        a2: "Landing page în 3-5 zile, site complet în 1-2 săptămâni. Depinde de cât de repede primim materialele de la tine.",
        q3: "Site-ul va apărea pe Google?",
        a3: "Da, includem SEO tehnic de bază: meta tags, viteză, structură semantică. Indexare în Google în câteva zile de la lansare.",
        q4: "Pot modifica conținutul după?",
        a4: "Da, livrăm codul sursă curat și documentat. Poți modifica textele sau pot face eu modificări la cerere.",
        q5: "Ce se întâmplă după lansare?",
        a5: "3 luni suport gratuit pentru bug-uri și mici ajustări. După, ofer mentenanță lunară la 50€ sau suport la cerere."
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
        title: "Modern websites for Romanian businesses that want new clients",
        subtitle: "Fast, conversion-focused. From €300 landing → €600 full site.",
        tagline: "Drafts in 3-5 days | 3 months free support",
        cta1: "WhatsApp Quote",
        cta2: "View Work",
        t1: "100% Mobile",
        t2: "SEO Ready",
        t3: "Free Support"
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
          price: "300 €",
          f1: "Complete landing page",
          f2: "Baseline technical SEO",
          f3: "Lead form + WhatsApp",
          f4: "Launched in 3-5 days",
          f5: "Email support 30 days",
          cta: "I want the Starter pack"
        },
        growth: {
          title: "Growth Pack",
          price: "600 €",
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
        },
        subscription: {
          title: "Monthly Subscriptions",
          subtitle: "Continuous support for growth",
          maintenance: {
            title: "Maintenance",
            price: "50 € / month",
            f1: "Daily backups",
            f2: "Security updates",
            f3: "Uptime monitoring",
            f4: "Minor bug fixes",
            cta: "Subscribe"
          },
          support: {
            title: "Priority Support",
            price: "100 € / month",
            f1: "2-hour response",
            f2: "Modifications included",
            f3: "Technical consulting",
            f4: "Update priority",
            cta: "Subscribe"
          },
          content: {
            title: "Content Updates",
            price: "30 € / month",
            f1: "Text modifications",
            f2: "Add articles",
            f3: "Update images",
            f4: "On-page SEO",
            cta: "Subscribe"
          }
        }
      },
      portfolio: {
        title: "Portfolio — web design projects",
        project1: {
          title: "Restaurant Landing",
          desc: "Modern design for restaurant with integrated reservation system. Mobile optimized.",
          link: "View case study"
        },
        project2: {
          title: "Law Firm Site",
          desc: "Professional online presence with appointment form and local SEO.",
          link: "View case study"
        },
        project3: {
          title: "E-commerce Redesign",
          desc: "Conversion optimization for online store. +40% sales after redesign.",
          link: "View case study"
        },
        project4: {
          title: "Freelancer Portfolio",
          desc: "Personal site with project gallery and contact form. Minimalist design.",
          link: "View case study"
        },
        project5: {
          title: "Site Generator Demo",
          desc: "Interactive vanilla JS demo. Choose business type, see instant preview.",
          link: "Try demo"
        }
      },
      process: {
        title: "How we work",
        step1: "Brief call",
        step1desc: "We learn your goals, target audience, and core message.",
        step2: "Wireframe",
        step2desc: "We approve structure and flow before final design.",
        step3: "Build + Test",
        step3desc: "Rapid development, testing on all devices.",
        step4: "Launch + Support",
        step4desc: "Publication, monitoring, and 3 months included support."
      },
      about: {
        title: "About me",
        intro: "Freelance web designer from Bucharest. Fast delivery for small and medium Romanian businesses.",
        cta: "Let's talk"
      },
      testimonials: {
        title: "What clients say",
        cristi: {
          text: "I collaborated with ZypheroLab for all 5 projects in my portfolio and I am extremely satisfied with every website created. The team understood my needs perfectly from the first discussion and delivered fast, modern, and conversion-optimized sites. I highly recommend them!",
          author: "— Cristi, owner of 5 projects"
        },
        maria: {
          text: "My restaurant website increased sales by 30% in the first month. The design is exactly what I needed - modern, fast, and easy to use on mobile.",
          author: "— Maria, restaurant owner"
        },
        andrei: {
          text: "Professionalism and fast delivery. My law firm now has an online presence that brings new clients every month.",
          author: "— Andrei, lawyer"
        }
      },
      gen: {
        title: "AI website generator",
        labelName: "Business name",
        phName: "Enter your name",
        labelDescription: "Short description",
        phDescription: "Describe your business in a few words",
        labelAddress: "Address",
        phAddress: "Street, number, city",
        labelPhone: "Phone",
        phPhone: "07XX XXX XXX",
        labelServices: "Main services (comma separated)",
        phServices: "Ex: Web design, SEO, Marketing",
        labelColor: "Primary color",
        colorHint: "Pick the accent hue for the preview, from 0 to 360 degrees.",
        labelStyle: "Style",
        btnGenerate: "Generate website preview",
        btnExport: "Export preview",
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
          ecommerce: "E-commerce",
          medical: "Medical clinic",
          fitness: "Gym / Fitness",
          legal: "Law firm",
          education: "Education / Courses",
          consulting: "Consulting"
        }
      },
      faq: {
        title: "FAQ — web design",
        q1: "How much does a website cost?",
        a1: "Landing page from €300, full 5-page site from €600. Final price depends on features and complexity.",
        q2: "How long does it take?",
        a2: "Landing page in 3-5 days, full site in 1-2 weeks. Depends on how quickly you provide materials.",
        q3: "Will my site appear on Google?",
        a3: "Yes, we include basic technical SEO: meta tags, speed, semantic structure. Google indexing within days of launch.",
        q4: "Can I edit content later?",
        a4: "Yes, we deliver clean, documented source code. You can edit text or I can make changes on request.",
        q5: "What happens after launch?",
        a5: "3 months free support for bugs and small adjustments. After that, I offer monthly maintenance at €50 or on-demand support."
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
