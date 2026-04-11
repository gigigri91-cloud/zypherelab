// Mobile Menu Toggle
(function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenuNavLinks = document.querySelectorAll('.mobile-menu-nav a');
  
  // Toggle mobile menu
  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('is-active');
    
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }
  
  // Open mobile menu
  function openMobileMenu() {
    mobileMenu.classList.add('is-active');
    mobileMenuOverlay.classList.add('is-active');
    document.body.classList.add('mobile-menu-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', hamburger.getAttribute('aria-label').replace('Deschide', 'Închide').replace('Open', 'Close'));
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileMenuOverlay.setAttribute('aria-hidden', 'false');
    
    // Focus on first nav link
    const firstLink = mobileMenuNavLinks[0];
    if (firstLink) {
      firstLink.focus();
    }
  }
  
  // Close mobile menu
  function closeMobileMenu() {
    mobileMenu.classList.remove('is-active');
    mobileMenuOverlay.classList.remove('is-active');
    document.body.classList.remove('mobile-menu-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', hamburger.getAttribute('aria-label').replace('Închide', 'Deschide').replace('Close', 'Open'));
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenuOverlay.setAttribute('aria-hidden', 'true');
    
    // Focus back on hamburger
    hamburger.focus();
  }
  
  // Event listeners
  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
  }
  
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }
  
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  }
  
  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-active')) {
      closeMobileMenu();
    }
  });
  
  // Close on nav link click
  mobileMenuNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
  
  // Close on window resize (if switching to desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('is-active')) {
      closeMobileMenu();
    }
  });
})();
