// Right now, your site doesn’t have much JS logic.
// You can add interactivity here if needed, like animations, dark mode toggle, etc.

console.log("Portfolio Loaded ✅");

// Example: Smooth scroll for sidebar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});
