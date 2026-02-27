// Handle mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navList.classList.toggle("nav-list--open");
  });

  // Close menu on link click (for smoother mobile UX)
  navList.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof Element && target.tagName === "A") {
      navToggle.setAttribute("aria-expanded", "false");
      navList.classList.remove("nav-list--open");
    }
  });
}

// Lightweight scroll reveal using IntersectionObserver
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  // Fallback: show all elements if IntersectionObserver is not available
  revealElements.forEach((el) => el.classList.add("is-visible"));
}

// Set dynamic copyright year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

