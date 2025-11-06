(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-navbar-open]'),
    closeModalBtn: document.querySelector('[data-navbar-close]'),
    modal: document.querySelector('[data-navbar]'),
    navLinks: document.querySelectorAll('.navbar-list a, .link-join-us'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.navLinks.forEach(link => {
    link.addEventListener('click', closeModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    refs.modal.classList.toggle('z-index');
  }

  function closeModal() {
    refs.modal.classList.remove('is-open', 'z-index');
  }
})();
