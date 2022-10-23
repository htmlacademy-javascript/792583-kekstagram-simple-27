const orderForm = document.querySelector('.img-upload__form');
const btnFormSend = document.querySelector('#upload-submit');
const textArea = document.querySelector('.text__description');
const MIN_AMOUNT_TEXT = 20;
const MAX_AMOUNT_TEXT = 140;

const pristine = new Pristine(orderForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

const validateTextArea = (value) =>
  value.length >= MIN_AMOUNT_TEXT && value.length <= MAX_AMOUNT_TEXT;

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
  if (textArea.value.length >= MIN_AMOUNT_TEXT && textArea.value.length <= MAX_AMOUNT_TEXT) {
    if (btnFormSend.hasAttribute('disabled') === true) {
      btnFormSend.disabled = false;
    }
  } else {
    if (btnFormSend.hasAttribute('disabled') === false) {
      btnFormSend.disabled = true;
    }
  }
});
