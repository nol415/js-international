const toggleButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');

if (toggleButton && nav) {
  toggleButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!nav.contains(target) && !toggleButton.contains(target)) {
      nav.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  });
}
