(function () {
  const STORAGE_KEY = "zyphero-lang";
  const DEFAULT_ROOT_LANG = "ro";

  function waPhoneDigits() {
    const c = typeof window !== "undefined" && window.ZypheroConfig && window.ZypheroConfig.waPhoneE164;
    return typeof c === "string" && /^\d{8,15}$/.test(c.trim()) ? c.trim() : "40747821384";
  }

  const STRINGS = {
    ro: {
      meta: {
        title: "ZypheroLab | Website-uri premium care aduc clienți",
        description:
          "ZypheroLab construiește website-uri premium, rapide și orientate pe conversie pentru business-uri din România. SEO tehnic, UX clar și lead-uri reale.",
        ogTitle: "ZypheroLab | Website-uri premium pentru creștere",
        ogDescription:
          "Design modern, viteză ridicată și structură orientată pe lead-uri. Optimizat pentru Google și căutări asistate de AI.",
        twitterTitle: "ZypheroLab | Website-uri premium pentru business",
        twitterDescription: "Website-uri rapide, SEO-ready și orientate pe conversie."
      },
      skip: "Sari la conținut",
      brand: { aria: "ZypheroLab — Acasă" },
      darkMode: { aria: "Comută dark mode" },
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
        title: "Website-uri premium care transformă vizitatorii în clienți",
        subtitle: "Design modern, structură clară și SEO tehnic. Primești un draft funcțional în 3-5 zile lucrătoare.",
        tagline: "Fără haos tehnic. Cu rezultate măsurabile.",
        cta1: "Ofertă WhatsApp",
        cta2: "Vezi lucrări",
        t1: "100% Mobile",
        t2: "SEO Ready",
        t3: "Suport Gratuit",
        lead: "",
        ctaSim: "Încearcă simulatorul live",
        ctaStart: "Începe acum",
        ctaQuote: "Cere ofertă"
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
        title: "Oferta potrivită pentru lansare rapidă",
        lead: "Pachet Start: landing page strategic + formular lead + setup SEO + analytics de bază.",
        li1: "Mesaj comercial clar și orientat pe conversie",
        li2: "Design premium, adaptat mobil-first",
        li3: "Implementare tehnică rapidă și curată",
        li4: "Checklist de optimizare post-lansare",
        cta: "Vreau o ofertă personalizată"
      },
      about: {
        title: "De ce ZypheroLab?",
        intro:
          "Creăm website-uri orientate pe rezultate, optimizate pentru performanță, SEO și conversie, cu un proces clar de la idee la lansare.",
        cta: "Hai să discutăm proiectul tău"
      },
      process: {
        title: "Cum lucrăm",
        step1: "Descoperire",
        step1desc: "Înțelegem business-ul, publicul țintă și obiectivele proiectului.",
        step2: "Structură & Design",
        step2desc: "Definim arhitectura paginii și UI-ul care convertește.",
        step3: "Implementare",
        step3desc: "Construim site-ul rapid, responsive și SEO-ready.",
        step4: "Lansare & Optimizare",
        step4desc: "Publicăm, măsurăm performanța și iterăm pe date."
      },
      pricing: {
        title: "Pachete clare, fără costuri ascunse",
        popular: "Recomandat",
        start: {
          title: "Start Lead",
          price: "300 €",
          f1: "1 pagină de prezentare",
          f2: "Design modern + responsive",
          f3: "Formular lead",
          f4: "SEO on-page de bază",
          f5: "Livrare rapidă",
          cta: "Alege pachetul Start"
        },
        growth: {
          title: "Growth Business",
          price: "600 €",
          f1: "Site complet (multi-secțiune)",
          f2: "Copy orientat pe conversie",
          f3: "SEO + schema markup",
          f4: "Integrare analytics",
          f5: "Optimizare performanță",
          cta: "Alege pachetul Growth"
        },
        custom: {
          title: "Custom Pro",
          price: "Preț personalizat",
          f1: "Funcționalități avansate",
          f2: "Integrări externe",
          f3: "Fluxuri dedicate",
          f4: "Consultanță strategie",
          f5: "Scalare pe termen lung",
          cta: "Cere ofertă custom"
        },
        subscription: {
          title: "Abonamente lunare",
          subtitle: "Suport continuu pentru viteză, stabilitate și creștere",
          maintenance: {
            title: "Mentenanță",
            price: "30 € / lună",
            f1: "Update-uri tehnice",
            f2: "Monitorizare uptime",
            f3: "Backup periodic",
            f4: "Suport de bază",
            cta: "Alege Mentenanță"
          },
          support: {
            title: "Suport",
            price: "50 € / lună",
            f1: "Tot din Mentenanță",
            f2: "Microupdate-uri de conținut",
            f3: "Asistență prioritară",
            f4: "Recomandări UX",
            cta: "Alege Suport"
          },
          content: {
            title: "Conținut + SEO",
            price: "100 € / lună",
            f1: "Tot din Suport",
            f2: "Optimizări SEO lunare",
            f3: "Actualizare conținut",
            f4: "Raport progres",
            cta: "Alege Conținut + SEO"
          }
        }
      },
      portfolio: {
        title: "Portofoliu — studii de caz",
        c1t: "Firmă servicii locale",
        c1p: "Redesign + SEO on-page. Rezultat: creștere trafic organic și lead-uri mai calificate.",
        c1m: "+68% cereri în 90 zile",
        c2t: "Restaurant urban",
        c2p: "Landing orientat pe rezervări mobile și viteză ridicată.",
        c2m: "+41% rezervări online",
        project1: {
          title: "Clinică stomatologică",
          desc: "Website de prezentare cu UX simplu și conversii clare.",
          link: "Detalii la cerere"
        },
        project2: {
          title: "Salon beauty",
          desc: "Landing modern optimizat pentru rezervări rapide.",
          link: "Detalii la cerere"
        },
        project3: {
          title: "Firmă consultanță",
          desc: "Structură profesională pentru lead-uri B2B.",
          link: "Detalii la cerere"
        },
        project4: {
          title: "Restaurant local",
          desc: "Pagină orientată pe meniu, rezervări și contact rapid.",
          link: "Detalii la cerere"
        },
        project5: {
          title: "Service auto",
          desc: "Website cu focus pe încredere, servicii și programări.",
          link: "Încearcă simulatorul"
        }
      },
      testimonials: {
        title: "Ce spun clienții",
        quote: "„Mesajul e clar, site-ul e rapid, iar lead-urile au crescut în prima lună.”",
        cite: "— Andrei, antreprenor local",
        andrei: {
          text: "„După lansare, cererile calificate au crescut în primele săptămâni. Site-ul comunică exact ce oferim.”",
          author: "Andrei, fondator firmă servicii"
        },
        cristi: {
          text: "„Am trecut de la un site vechi la un flux clar de contact. Acum avem lead-uri constante, fără trafic irosit.”",
          author: "Cristi, owner business local"
        },
        maria: {
          text: "„Proces clar, livrare rapidă și design premium. Clienții au început să ne perceapă mult mai profesionist.”",
          author: "Maria, fondator studio"
        }
      },
      gen: {
        title: "Generator website AI",
        labelName: "Nume business",
        phName: "Introdu numele",
        labelPhone: "Telefon",
        phPhone: "07xx xxx xxx",
        labelAddress: "Adresă",
        phAddress: "Oraș, stradă, nr.",
        labelDescription: "Descriere business",
        phDescription: "Spune pe scurt ce oferi și cui te adresezi.",
        labelServices: "Servicii principale",
        phServices: "Ex: tuns, barbă, styling",
        labelType: "Tip business",
        labelColor: "Culoare principală",
        colorHint: "Alege nuanța culorii accent pentru preview, de la 0 la 360 grade.",
        labelStyle: "Stil",
        btnGenerate: "Generează preview site",
        btnExport: "Exportă HTML",
        previewRegion: "Previzualizare concept site",
        phPreview: "Apasă „Generează preview site” pentru a vedea conceptul.",
        footText: "Vezi cum arată site-ul în ~30 de secunde — preview AI instant pentru business-ul tău.",
        footCta: "Vreau acest site",
        errorName: "Te rugăm să introduci numele business-ului.",
        errorNoPreview: "Generează întâi un preview pentru export.",
        opt: {
          restaurant: "Restaurant",
          barber: "Frizerie",
          agency: "Agenție",
          services: "Servicii",
          ecommerce: "E-commerce",
          medical: "Medical",
          fitness: "Fitness",
          legal: "Avocatură",
          education: "Educație",
          consulting: "Consultanță"
        }
      },
      faq: {
        title: "Întrebări frecvente",
        q1: "În cât timp primesc prima versiune?",
        a1: "De regulă în 3-5 zile lucrătoare pentru un draft funcțional, gata de feedback.",
        q2: "Ce include pachetul de bază?",
        a2: "Structură strategică, design responsive, formular lead, setup SEO de bază și analytics.",
        q3: "Cum mă ajută site-ul să obțin mai mulți clienți?",
        a3: "Prin mesaj clar, arhitectură orientată pe conversie și CTA-uri care reduc fricțiunea.",
        q4: "Pot cere modificări după lansare?",
        a4: "Da. Putem face ajustări punctuale sau poți alege un abonament de suport lunar.",
        q5: "Lucrați și cu business-uri în engleză?",
        a5: "Da. Site-ul are variantă RO/EN și putem adapta conținutul pentru audiențe internaționale."
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
        errorRequired: "Acest câmp este obligatoriu.",
        errorEmail: "Introdu o adresă de email validă.",
        success: "Cererea a fost trimisă. Revenim rapid cu un răspuns.",
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
        section: {
          about: "Despre noi",
          services: "Servicii",
          contact: "Contact",
          contactPlaceholder: "Contactați-ne pentru mai multe informații"
        },
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
        title: "ZypheroLab | Premium websites that win clients",
        description:
          "ZypheroLab builds premium, high-performance websites for Romanian businesses. Conversion-focused UX, technical SEO, and measurable lead growth.",
        ogTitle: "ZypheroLab | Premium websites for growth",
        ogDescription:
          "Modern design, strong performance, and clear conversion flow. Optimized for Google and AI-assisted search.",
        twitterTitle: "ZypheroLab | Premium websites for business",
        twitterDescription: "Fast, SEO-ready websites designed to generate leads."
      },
      skip: "Skip to content",
      brand: { aria: "ZypheroLab — Home" },
      darkMode: { aria: "Toggle dark mode" },
      nav: { aria: "Main navigation", home: "Home", services: "Services", portfolio: "Portfolio", simulator: "Simulator", contact: "Contact" },
      lang: { switchAria: "Site language", ro: "Romanian", en: "English" },
      header: { cta: "Get a Quote" },
      hero: {
        title: "Premium Websites That Turn Visitors Into Clients",
        subtitle: "Modern design, clear structure, and technical SEO. You get a functional draft in 3-5 business days.",
        tagline: "No technical chaos. Just measurable growth.",
        cta1: "WhatsApp Offer",
        cta2: "See Projects",
        t1: "100% Mobile",
        t2: "SEO Ready",
        t3: "Free Support",
        lead: "Fast pages, a clear message, and optimization for Google and AI search — so you get steady leads.",
        ctaSim: "Try Live Simulator",
        ctaStart: "Start now",
        ctaQuote: "Get a Quote"
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
        title: "The right offer for a fast launch",
        lead: "Starter pack: strategic landing page + lead form + baseline SEO + basic analytics.",
        li1: "Clear, conversion-focused business messaging",
        li2: "Premium responsive design, mobile-first",
        li3: "Clean technical implementation delivered fast",
        li4: "Post-launch optimization checklist",
        cta: "I want a custom quote"
      },
      about: {
        title: "Why ZypheroLab?",
        intro:
          "We build results-focused websites optimized for performance, SEO, and conversion, with a clear process from idea to launch.",
        cta: "Let's discuss your project"
      },
      process: {
        title: "How we work",
        step1: "Discovery",
        step1desc: "We understand your business, audience, and project goals.",
        step2: "Structure & Design",
        step2desc: "We define page architecture and conversion-oriented UI.",
        step3: "Implementation",
        step3desc: "We build a fast, responsive, SEO-ready site.",
        step4: "Launch & Optimize",
        step4desc: "We publish, measure performance, and iterate on data."
      },
      pricing: {
        title: "Clear plans, no hidden costs",
        popular: "Most popular",
        start: {
          title: "Lead Start",
          price: "300 €",
          f1: "1 presentation page",
          f2: "Modern responsive design",
          f3: "Lead form",
          f4: "Basic on-page SEO",
          f5: "Fast delivery",
          cta: "Choose Start plan"
        },
        growth: {
          title: "Business Growth",
          price: "600 €",
          f1: "Complete website (multi-section)",
          f2: "Conversion-focused copy",
          f3: "SEO + schema markup",
          f4: "Analytics integration",
          f5: "Performance optimization",
          cta: "Choose Growth plan"
        },
        custom: {
          title: "Custom Pro",
          price: "Custom quote",
          f1: "Advanced functionality",
          f2: "External integrations",
          f3: "Dedicated flows",
          f4: "Strategy consulting",
          f5: "Long-term scaling",
          cta: "Request custom quote"
        },
        subscription: {
          title: "Monthly subscriptions",
          subtitle: "Continuous support for speed, stability, and growth",
          maintenance: {
            title: "Maintenance",
            price: "30 € / month",
            f1: "Technical updates",
            f2: "Uptime monitoring",
            f3: "Periodic backups",
            f4: "Basic support",
            cta: "Choose Maintenance"
          },
          support: {
            title: "Support",
            price: "50 € / month",
            f1: "Everything in Maintenance",
            f2: "Minor content updates",
            f3: "Priority assistance",
            f4: "UX recommendations",
            cta: "Choose Support"
          },
          content: {
            title: "Content + SEO",
            price: "100 € / month",
            f1: "Everything in Support",
            f2: "Monthly SEO improvements",
            f3: "Content updates",
            f4: "Progress reports",
            cta: "Choose Content + SEO"
          }
        }
      },
      portfolio: {
        title: "Portfolio — case studies",
        c1t: "Local services company",
        c1p: "Redesign + on-page SEO. Result: more organic traffic and better-qualified leads.",
        c1m: "+68% inquiries in 90 days",
        c2t: "Urban restaurant",
        c2p: "Mobile-first landing focused on reservations and speed.",
        c2m: "+41% online reservations",
        project1: {
          title: "Dental clinic",
          desc: "Presentation website with clean UX and clear conversion paths.",
          link: "Details on request"
        },
        project2: {
          title: "Beauty salon",
          desc: "Modern landing page optimized for fast bookings.",
          link: "Details on request"
        },
        project3: {
          title: "Consulting firm",
          desc: "Professional structure tailored for B2B lead generation.",
          link: "Details on request"
        },
        project4: {
          title: "Local restaurant",
          desc: "Page focused on menu, bookings, and quick contact.",
          link: "Details on request"
        },
        project5: {
          title: "Auto service",
          desc: "Website focused on trust, services, and appointments.",
          link: "Try the simulator"
        }
      },
      testimonials: {
        title: "What clients say",
        quote: "“The message is clear, the site is fast, and leads grew in the first month.”",
        cite: "— Andrei, local business owner",
        andrei: {
          text: "“After launch, qualified enquiries increased within weeks. The site communicates exactly what we offer.”",
          author: "Andrei, service business founder"
        },
        cristi: {
          text: "“We moved from an outdated site to a clear lead flow. Now requests come in consistently.”",
          author: "Cristi, local business owner"
        },
        maria: {
          text: "“Clear process, fast delivery, premium design. Clients now perceive us as much more credible.”",
          author: "Maria, studio founder"
        }
      },
      gen: {
        title: "AI website generator",
        labelName: "Business name",
        phName: "Enter your name",
        labelPhone: "Phone",
        phPhone: "+40 7xx xxx xxx",
        labelAddress: "Address",
        phAddress: "City, street, no.",
        labelDescription: "Business description",
        phDescription: "Briefly describe what you offer and for whom.",
        labelServices: "Main services",
        phServices: "e.g. haircut, beard, styling",
        labelType: "Business type",
        labelColor: "Primary color",
        colorHint: "Pick the accent hue for the preview, from 0 to 360 degrees.",
        labelStyle: "Style",
        btnGenerate: "Generate website preview",
        btnExport: "Export HTML",
        previewRegion: "Live website preview",
        phPreview: "Click “Generate preview” to see the concept.",
        footText: "See your site in ~30 seconds — an instant AI preview for your business.",
        footCta: "I want this website",
        errorName: "Please enter your business name.",
        errorNoPreview: "Generate a preview first before exporting.",
        opt: {
          restaurant: "Restaurant",
          barber: "Barber shop",
          agency: "Agency",
          services: "Services",
          ecommerce: "E-commerce",
          medical: "Medical",
          fitness: "Fitness",
          legal: "Legal",
          education: "Education",
          consulting: "Consulting"
        }
      },
      faq: {
        title: "Frequently asked questions",
        q1: "How soon do I get the first version?",
        a1: "Usually within 3-5 business days for a functional draft ready for feedback.",
        q2: "What is included in the starter package?",
        a2: "Strategic page structure, responsive design, lead form, baseline SEO setup, and analytics.",
        q3: "How does the website help me get more clients?",
        a3: "Through clear messaging, conversion-focused structure, and CTA flows that reduce friction.",
        q4: "Can I request changes after launch?",
        a4: "Yes. You can request one-off updates or choose a monthly support plan.",
        q5: "Do you work with bilingual audiences?",
        a5: "Yes. The site supports RO/EN and content can be adapted for international clients."
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
        errorRequired: "This field is required.",
        errorEmail: "Please enter a valid email address.",
        success: "Your request was sent. We will reply shortly.",
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
        section: {
          about: "About us",
          services: "Services",
          contact: "Contact",
          contactPlaceholder: "Contact us for more information"
        },
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
    let urlLang = null;
    try {
      const params = new URLSearchParams(window.location.search);
      const q = params.get("lang");
      if (q === "en" || q === "ro") {
        urlLang = q;
      }
    } catch {
      /* ignore */
    }
    if (urlLang) {
      return urlLang;
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
    return DEFAULT_ROOT_LANG;
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
    setLinkHref('link[rel="alternate"][hreflang="ro"]', `${baseUrl}/`);
    setLinkHref('link[rel="alternate"][hreflang="en"]', `${baseUrl}/en/`);
    setLinkHref('link[rel="alternate"][hreflang="x-default"]', `${baseUrl}/`);
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
      const url = new URL(window.location.href);
      const targetPath = currentLang === "en" ? "/en/" : "/";
      const hadLangParam = url.searchParams.has("lang");
      if (hadLangParam) {
        url.searchParams.delete("lang");
      }
      const normalizedCurrentPath = normalizePathname(url.pathname);
      const normalizedTargetPath = normalizePathname(targetPath);
      if (normalizedCurrentPath !== normalizedTargetPath || hadLangParam) {
        const search = url.searchParams.toString();
        const nextUrl = `${targetPath}${search ? `?${search}` : ""}${url.hash || ""}`;
        window.history.replaceState({}, "", nextUrl);
      }
    } catch {
      /* ignore */
    }
  }

  function applyDomStrings() {
    document.documentElement.lang = currentLang === "en" ? "en" : "ro";

    document.querySelectorAll(".lang-switch").forEach((langGroup) => {
      langGroup.setAttribute("aria-label", t("lang.switchAria"));
    });

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
    normalizeUrlToPathLang();
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "ro") {
      return;
    }
    if (currentLang === lang) {
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
    document.querySelectorAll(".lang-switch .lang-btn").forEach((btn) => {
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
