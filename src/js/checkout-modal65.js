(() => {
    const refs = {
      // Додати атрибут data-modal65-open на кнопку відкриття
      openModalBtn: document.querySelector('[data-modal65-open]'),
      // Додати атрибут data-modal65-close на кнопку закриття
      closeModalBtn: document.querySelector('[data-modal65-close]'),
      // Додати атрибут data-modal65 на бекдроп модалки
      modal: document.querySelector('[data-modal65]'),
    };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
