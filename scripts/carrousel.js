// Prev / next buttons for .carrousel tracks (the track itself is scroll-snap, so swipe works natively).
(function () {
  document.querySelectorAll('.carrousel').forEach((carrousel) => {
    const track = carrousel.querySelector('.carrousel-track');
    const prev = carrousel.querySelector('[data-carrousel="prev"]');
    const next = carrousel.querySelector('[data-carrousel="next"]');

    if (!track || !prev || !next) return;

    function step() {
      const card = track.querySelector('.carrousel-card');
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card ? card.offsetWidth + gap : track.clientWidth;
    }

    function updateButtons() {
      const max = track.scrollWidth - track.clientWidth - 2;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max;
    }

    prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
    track.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    updateButtons();
  });
})();
