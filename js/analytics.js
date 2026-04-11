// Analytics Event Tracking
(function() {
  // Track event helper function
  function trackEvent(eventName, eventParams) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, eventParams);
    }
  }

  // Track form submit
  const leadForm = document.querySelector('#leadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', function() {
      trackEvent('generate_lead', {
        form_id: 'leadForm',
        form_name: 'Contact Form'
      });
    });
  }

  // Track simulator usage
  const simulatorForm = document.querySelector('#simulator-form');
  if (simulatorForm) {
    simulatorForm.addEventListener('submit', function() {
      trackEvent('simulator_generate', {
        form_id: 'simulator-form'
      });
    });
  }

  // Track CTA clicks
  const headerCTA = document.querySelector('.header-cta');
  if (headerCTA) {
    headerCTA.addEventListener('click', function() {
      trackEvent('cta_click', {
        button_name: 'Header CTA',
        button_location: 'header'
      });
    });
  }

  const chatAI = document.querySelector('.chat-ai');
  if (chatAI) {
    chatAI.addEventListener('click', function() {
      trackEvent('cta_click', {
        button_name: 'Chat AI',
        button_location: 'floating'
      });
    });
  }

  const whatsapp = document.querySelector('.whatsapp');
  if (whatsapp) {
    whatsapp.addEventListener('click', function() {
      trackEvent('cta_click', {
        button_name: 'WhatsApp',
        button_location: 'floating'
      });
    });
  }

  // Track dark mode toggle
  const darkModeToggle = document.querySelectorAll('.dark-mode-toggle');
  darkModeToggle.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const isDark = document.body.classList.contains('dark-mode');
      trackEvent('dark_mode_toggle', {
        mode: isDark ? 'dark' : 'light'
      });
    });
  });

  // Track language switch
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(button => {
    button.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      trackEvent('language_switch', {
        language: lang
      });
    });
  });

  // Track mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      const isOpen = this.getAttribute('aria-expanded') === 'true';
      trackEvent('mobile_menu_toggle', {
        state: isOpen ? 'open' : 'close'
      });
    });
  }

  // Track navigation clicks
  const navLinks = document.querySelectorAll('[data-nav-target]');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const target = this.getAttribute('data-nav-target');
      trackEvent('navigation_click', {
        target_section: target
      });
    });
  });
})();
