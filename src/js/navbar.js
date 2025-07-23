(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-navbar-open]'),
    closeModalBtn: document.querySelector('[data-navbar-close]'),
    modal: document.querySelector('[data-navbar]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
