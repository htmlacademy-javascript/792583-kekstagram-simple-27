import { isEnterKey, isEscapeKey } from './util.js';
import { deleteComment, btnSendForm } from './form-valid.js';
import { returnOriginScale, resetEffects } from './scale-effect.js';

const btnLoadForm = document.querySelector('.img-upload__label');
const modalUploadForm = document.querySelector('.img-upload__overlay');
const documentBody = document.querySelector('body');
const btnCloseForm = document.querySelector('#upload-cancel');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const uploadInput = document.querySelector('.img-upload__input');

const successElement = successTemplate.cloneNode(true);
const errorElement = errorTemplate.cloneNode(true);

const clearUploadInput = () => {
  uploadInput.value = '';
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeUserModal();
  }
};

const closeErrorModal = () => {
  errorElement.remove();
};
const closeSuccessModal = () => {
  successElement.remove();
};

const openUserModal = () => {
  modalUploadForm.classList.remove('hidden');
  documentBody.classList.add('modal-open');
  btnSendForm.disabled = false;
  returnOriginScale();
  document.addEventListener('keydown', onPopupEscKeydown, { once: true });
};

const closeUserModal = () => {
  modalUploadForm.classList.add('hidden');
  documentBody.classList.remove('modal-open');
  deleteComment();
  clearUploadInput();
  resetEffects();
  document.addEventListener('keydown', onPopupEscKeydown, { once: true });
};

btnLoadForm.addEventListener('click', () => {
  openUserModal();
});
btnLoadForm.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

btnCloseForm.addEventListener('click', () => {
  closeUserModal();
});
btnCloseForm.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});

const clickOnEscSuccess = (evt) => {
  if (isEscapeKey(evt)) {
    closeSuccessModal();
  }
};
const clickOnEscError = (evt) => {
  if (isEscapeKey(evt)) {
    closeErrorModal();
  }
};

const showSuccessAlert = () => {
  document.body.append(successElement);

  document.addEventListener('keydown', clickOnEscSuccess, { once: true });
};
const showErrorAlert = () => {
  document.body.append(errorElement);

  document.addEventListener('keydown', clickOnEscError, { once: true });
};

successElement.addEventListener('click', () => {
  closeSuccessModal();
});

errorElement.addEventListener('click', () => {
  closeErrorModal();
});

export {
  closeUserModal,
  openUserModal,
  showSuccessAlert,
  showErrorAlert,
  clearUploadInput
};

