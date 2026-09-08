const menuToggle = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('.site-navigation');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  siteNavigation?.classList.toggle('is-open', !isOpen);
});

siteNavigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    siteNavigation.classList.remove('is-open');
  });
});

const skillWindow = document.querySelector('.skill-window');
const skillArrows = document.querySelectorAll('.skill-arrow');

skillArrows.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    const direction = arrow.dataset.direction === 'next' ? 1 : -1;
    skillWindow?.scrollBy({
      left: direction * skillWindow.clientWidth,
      behavior: 'smooth',
    });
  });
});