(() => {
  const openMenuBtnRef = document.querySelector('[data-menu-open-button]');
  const closeMenuBtnRef = document.querySelector('[data-menu-close-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const body = document.querySelector('body');
  openMenuBtnRef.addEventListener('click', () => {
    body.classList.toggle('hidden');
    mobileMenuRef.classList.toggle('is-open');
  });
  closeMenuBtnRef.addEventListener('click', () => {
    body.classList.toggle('hidden');
    mobileMenuRef.classList.toggle('is-open');
  });
})();
