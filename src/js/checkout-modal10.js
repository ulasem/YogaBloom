(() => {
    const refs = {
      // Додати атрибут data-modal10-open на кнопку відкриття
      openModalBtn: document.querySelector('[data-modal10-open]'),
      // Додати атрибут data-modal10-close на кнопку закриття
      closeModalBtn: document.querySelector('[data-modal10-close]'),
      // Додати атрибут data-modal10 на бекдроп модалки
      modal: document.querySelector('[data-modal10]'),
    };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();