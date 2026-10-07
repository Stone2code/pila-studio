// Sends the contact form with fetch (Formspree-compatible) and shows the "sent" state without leaving the page.
(function () {
  const form = document.querySelector('.pila-form');
  if (!form) return;

  const card = form.closest('.form-card');
  const sent = card.querySelector('.form-sent');
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');
  const fallback = 'Something went wrong. Write to us at <a href="mailto:hello@pilastudio.com">hello@pilastudio.com</a>.';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (form.action.includes('YOUR_FORM_ID')) {
      status.innerHTML = 'The form is not connected yet. ' + fallback.replace('Something went wrong. ', '');
      return;
    }

    button.disabled = true;
    status.textContent = 'Sending...';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) throw new Error(response.status);

      form.hidden = true;
      sent.hidden = false;
      sent.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
      status.innerHTML = fallback;
      button.disabled = false;
    }
  });
})();
