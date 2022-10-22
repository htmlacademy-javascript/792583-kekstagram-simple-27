const orderForm = document.querySelector('.img-upload__form');
const btnFormSend = document.querySelector('#upload-submit');
const textArea = document.querySelector('.text__description');

const pristine = new Pristine(orderForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

function validateTextArea(value) {
  return value.length >= 20 && value.length <= 140;
}

pristine.addValidator(
  orderForm.querySelector('#description'),
  validateTextArea,
  'От 20 до 140 символов',
);

orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

textArea.addEventListener('input', () => {
  if (textArea.value.length >= 20 && textArea.value.length <= 140) {
    if (btnFormSend.hasAttribute('disabled') === true) {
      // btnFormSend.removeAttribute('disabled');
      btnFormSend.disabled = false;
    }
  } else {
    if (btnFormSend.hasAttribute('disabled') === false) {
      btnFormSend.disabled = true;
    }
  }
});
