// Instant jump instead of smooth
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "auto" }); // <-- replaces "smooth"
    }
  });
});


// Animate skill bars on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".skill-bar").forEach(bar => {
    const level = bar.getAttribute("data-level");
    const top = bar.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (top < screenHeight - 100 && !bar.classList.contains("animated")) {
      bar.firstElementChild.style.width = level;
      bar.classList.add("animated");
    }
  });
});


// Animate skill bars when they enter the viewport
document.addEventListener('DOMContentLoaded', () => {
  const skillBars = document.querySelectorAll('.skill-bar');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const level = bar.getAttribute('data-level');
        bar.style.setProperty('--skill-level', level);
        bar.classList.add('animated');
        observer.unobserve(bar);
      }
    });
  }, {
    threshold: 0.5
  });

  skillBars.forEach(bar => {
    observer.observe(bar);
  });
});

// Smooth scroll for all anchor links (fallback support)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "auto" });
    }
  });
});

// Skill bar animation on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".skill-bar").forEach(bar => {
    const level = bar.getAttribute("data-level");
    const top = bar.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (top < screenHeight - 100 && !bar.classList.contains("animated")) {
      bar.firstElementChild.style.width = level;
      bar.classList.add("animated");
    }
  });
});

// Expand/collapse project cards
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
