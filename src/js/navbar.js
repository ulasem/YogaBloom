(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-navbar-open]'),
    closeModalBtn: document.querySelector('[data-navbar-close]'),
    modal: document.querySelector('[data-navbar]'),
    header: document.querySelector('.header'),
  };

  refs.openModalBtn.addEventListener('click', handlerOpen);
  refs.closeModalBtn.addEventListener('click', handlerClose);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  function handlerOpen() {
    toggleModal();
    refs.header.style.position = 'static';
    refs.header.style.zIndex = '0';
  }

  function handlerClose() {
    toggleModal();
    refs.header.style.position = 'sticky';
    refs.header.style.zIndex = '1000';
  }
})();
