// Project filter on work.html: buttons [data-filter] show/hide items [data-category] ("any" always stays visible).
(function () {
  const buttons = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('[data-category]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      items.forEach((item) => {
        item.hidden = filter !== 'all' && item.dataset.category !== 'any' && item.dataset.category !== filter;
      });
    });
  });
})();
