(() => {
  const refs = {
    openModalBtnHero: document.querySelector('[data-modal-open-hero]'), //використовуємо зрозумілі, прості, унікальні селектори, в яких не заплутаємося
    openModalBtnSectionFirst: document.querySelector('[data-modal-open-first]'), //використовуємо зрозумілі, прості, унікальні селектори, в яких не заплутаємося
    openModalBtnSectionSecond: document.querySelector('[data-modal-open-second]'), //використовуємо зрозумілі, прості, унікальні селектори, в яких не заплутаємося
    openModalBtnSectionThird: document.querySelector('[data-modal-open-third]'), //використовуємо зрозумілі, прості, унікальні селектори, в яких не заплутаємося
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
// скрипт розрахований на одне модальне вікно, яке відкривається з 4 кнопок, більше кнопок додаємо по аналогії з рядками 3-6, якщо кнопок менше, то прибираємо зайве, щоб не падав скрипт
// модальне вікно одне, закриваюча кнопка в нього, відповідно, також одна
