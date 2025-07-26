function initValidation(modalId) {
  const form = document.querySelector(`[data-modal${modalId}] .modal-form`);
  if (!form) return;

  const nameInput = document.getElementById(`modal-form-${modalId}-user-name`);
  const nameError = document.getElementById(`name-error-${modalId}`);

  const emailInput = document.getElementById(`modal-form-${modalId}-email`);
  const emailError = emailInput?.nextElementSibling;

  const phoneInput = document.getElementById(`modal-form-${modalId}-phone`);
  const phoneError = document.getElementById(`phone-error-${modalId}`);

  const namePattern = /^(?!-)(?!.*--)[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+(-?[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+)*$/;
  const emailPattern = /^[A-Za-z0-9_.-]+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,8}$/;
  const phonePattern = /^(?=(?:.*\d){4,})[\d()+\s-]+$/;

  function validateName() {
    const value = nameInput.value.trim();
    if (value === "") {
      nameError.classList.remove('active');
      nameInput.classList.remove('invalid-input');
      return true;
    }
    const isValid = namePattern.test(value);
    nameError.classList.toggle('active', !isValid);
    nameInput.classList.toggle('invalid-input', !isValid);
    return isValid;
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    const isValid = emailPattern.test(value);
    emailError.classList.toggle('active', value !== "" && !isValid);
    emailInput.classList.toggle('invalid-input', value !== "" && !isValid);
  }

  function validatePhone() {
    const value = phoneInput.value.trim();
    const isValidFormat = phonePattern.test(value);

    if (value === "") {
      phoneError.textContent = "This field is required";
      phoneError.classList.add('active');
      phoneInput.classList.add('invalid-input');
      return false;
    } else if (!isValidFormat) {
      phoneError.textContent = "Invalid phone number, try again";
      phoneError.classList.add('active');
      phoneInput.classList.add('invalid-input');
      return false;
    } else {
      phoneError.classList.remove('active');
      phoneInput.classList.remove('invalid-input');
      return true;
    }
  }

  nameInput.addEventListener('blur', validateName);
  emailInput.addEventListener('blur', validateEmail);
  phoneInput.addEventListener('blur', validatePhone);

  form.addEventListener('submit', function (e) {
    const isNameValid = validateName();
    validateEmail();
    const isPhoneValid = validatePhone();

    if (!isNameValid || emailInput.classList.contains('invalid-input') || !isPhoneValid) {
      e.preventDefault();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal-form').forEach(form => {
    const modalOverlay = form.closest('[class*="modal-overlay"]');
    const modalAttr = [...modalOverlay.attributes].find(attr => attr.name.startsWith("data-modal"));
    
    if (modalAttr) {
      const modalId = modalAttr.name.replace("data-modal", "");
      initValidation(modalId);
    }
  });
});
