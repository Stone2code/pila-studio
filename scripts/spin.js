// Rotates .illu-scroll wrappers as the page scrolls (data-speed: degrees per pixel, can be negative).
(function () {
  const items = document.querySelectorAll('.illu-scroll');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!items.length || reduced) return;

  let ticking = false;

  function update() {
    items.forEach((item) => {
      const speed = parseFloat(item.dataset.speed || '0.2');
      item.style.transform = 'rotate(' + window.scrollY * speed + 'deg)';
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }, { passive: true });

  update();
})();
