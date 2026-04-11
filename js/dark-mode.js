// Dark Mode Toggle
(function() {
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const darkModeIcon = document.querySelector('.dark-mode-toggle-icon');
  
  // Check localStorage for saved preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Apply saved theme or system preference
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
    if (darkModeIcon) {
      darkModeIcon.textContent = '☀️';
    }
  }
  
  // Toggle dark mode
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      
      // Update icon
      if (darkModeIcon) {
        darkModeIcon.textContent = isDark ? '☀️' : '🌙';
      }
      
      // Save preference
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.body.classList.add('dark-mode');
        if (darkModeIcon) {
          darkModeIcon.textContent = '☀️';
        }
      } else {
        document.body.classList.remove('dark-mode');
        if (darkModeIcon) {
          darkModeIcon.textContent = '🌙';
        }
      }
    }
  });
})();
