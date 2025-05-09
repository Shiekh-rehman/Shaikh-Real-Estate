// Toggle mobile nav
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

// GSAP Animations
gsap.from(".navbar", {
  opacity: 0,
  y: -60,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".nav-links li", {
  opacity: 0,
  y: 20,
  duration: 0.5,
  stagger: 0.2,
  delay: 0.5
});

gsap.from(".main-heading", {
  y: -100,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out"
});

gsap.from(".tagline", {
  y: 30,
  opacity: 0,
  delay: 0.4,
  duration: 1.2,
  ease: "power2.out"
});


