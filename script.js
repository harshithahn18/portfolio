// Select the button from HTML
const toggleBtn = document.getElementById('theme-toggle');

// Listen for a click on the button
toggleBtn.addEventListener('click', () => {
  // Toggle the 'dark-mode' CSS class on the <body> tag
  document.body.classList.toggle('dark-mode');
  
  // Change button text based on current theme
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Light Mode';
  } else {
    toggleBtn.textContent = '🌙 Dark Mode';
  }
});