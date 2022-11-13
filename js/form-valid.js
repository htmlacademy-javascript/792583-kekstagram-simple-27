import { showAlert } from './util.js';
import { sendData } from './api.js';
import { showSuccessAlert, showErrorAlert, clearUploadInput } from './user-modal.js';
import { returnOriginScale, resetEffects } from './scale-effect.js';

const MIN_AMOUNT_TEXT = 20;
const MAX_AMOUNT_TEXT = 140;

const orderForm = document.querySelector('.img-upload__form');
const btnSendForm = document.querySelector('#upload-submit');
const textAreaForm = document.querySelector('.text__description');

const pristine = new Pristine(orderForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

const blockSubmitButton = () => {
  btnSendForm.disabled = true;
  btnSendForm.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  btnSendForm.disabled = false;
  btnSendForm.textContent = 'Сохранить';
};
const deleteComment = () => {
  textAreaForm.value = '';
};
const setUserFormSubmit = (onSuccess) => {
  orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showSuccessAlert();
          deleteComment();
          returnOriginScale();
          clearUploadInput();
          resetEffects();
        },
        () => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          unblockSubmitButton();
          showErrorAlert();
        },
        new FormData(evt.target),
      );
    }
  });
};

textAreaForm.addEventListener('input', () => {
  if (textAreaForm.value.length >= MIN_AMOUNT_TEXT && textAreaForm.value.length <= MAX_AMOUNT_TEXT) {
    btnSendForm.disabled = false;
  } else {
    if (btnSendForm.hasAttribute('disabled') === false) {
      btnSendForm.disabled = true;
    }
  }
});

export {
  setUserFormSubmit,
  deleteComment,
  btnSendForm
};
