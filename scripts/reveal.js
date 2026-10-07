// Fade + slight slide-in for elements with the .reveal class.
(function () {
  const items = document.querySelectorAll('.reveal');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!items.length || reduced || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('js');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  items.forEach((item) => observer.observe(item));
})();
