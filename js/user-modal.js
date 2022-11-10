import { isEnterKey, isEscapeKey } from './util.js';
import { deleteComment } from './form-valid.js';
import { returnOriginScale, resetEffects } from './scale-effect.js';

const btnFormLoad = document.querySelector('.img-upload__label');
const formCreateImage = document.querySelector('.img-upload__overlay');
const documentBody = document.querySelector('body');
const formCloseBtn = document.querySelector('#upload-cancel');
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

const openUserModal = () => {
  formCreateImage.classList.remove('hidden');
  documentBody.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown, { once: true });
};

const closeUserModal = () => {
  formCreateImage.classList.add('hidden');
  documentBody.classList.remove('modal-open');
  deleteComment();
  returnOriginScale();
  clearUploadInput();
  resetEffects();
  document.addEventListener('keydown', onPopupEscKeydown, { once: true });
};

btnFormLoad.addEventListener('click', () => {
  openUserModal();
});
btnFormLoad.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});
formCloseBtn.addEventListener('click', () => {
  closeUserModal();
});
formCloseBtn.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});

const showSuccessAlert = () => {
  document.body.append(successElement);
};

successElement.addEventListener('click', () => {
  document.body.lastChild.remove(successElement);
});

errorElement.addEventListener('click', () => {
  document.body.lastChild.remove(errorElement);
});

const showErrorAlert = () => {
  document.body.append(errorElement);
};

export {
  closeUserModal,
  openUserModal,
  showSuccessAlert,
  showErrorAlert,
  clearUploadInput
};

