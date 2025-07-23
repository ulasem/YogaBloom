(() => {
    const refs = {
      // Додати атрибут data-modal80-open на кнопку відкриття
      openModalBtn: document.querySelector('[data-modal80-open]'),
      // Додати атрибут data-modal80-close на кнопку закриття
      closeModalBtn: document.querySelector('[data-modal80-close]'),
      // Додати атрибут data-modal80 на бекдроп модалки
      modal: document.querySelector('[data-modal80]'),
    };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
