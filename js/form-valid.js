import { showAlert } from './util.js';
import { sendData } from './api.js';
import { showSuccessAlert, showErrorAlert, clearUploadInput } from './user-modal.js';
import { returnOriginScale, resetEffects } from './scale-effect.js';

const MIN_AMOUNT_TEXT = 20;
const MAX_AMOUNT_TEXT = 140;

const orderForm = document.querySelector('.img-upload__form');
const btnFormSend = document.querySelector('#upload-submit');
const textArea = document.querySelector('.text__description');

const pristine = new Pristine(orderForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

const blockSubmitButton = () => {
  btnFormSend.disabled = true;
  btnFormSend.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  btnFormSend.disabled = false;
  btnFormSend.textContent = 'Сохранить';
};
const deleteComment = () => {
  textArea.value = '';
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

export {
  setUserFormSubmit,
  deleteComment
};
