import { isEnterKey, isEscapeKey } from './util.js';
import { deleteComment } from './form-valid.js';
import { installOriginEffect, returnOriginScale, resetEffects } from './scale-effect.js';

const btnFormLoad = document.querySelector('.img-upload__label');
const formCreateImage = document.querySelector('.img-upload__overlay');
const documentBody = document.querySelector('body');
const formCloseBtn = document.querySelector('#upload-cancel');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const uploadInput = document.querySelector('.img-upload__input');

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
  installOriginEffect();
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
const successElement = successTemplate.cloneNode(true);

const showSuccessAlert = () => {
  document.body.append(successElement);
};

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    document.body.lastChild.remove(successElement);
  }
}, { once: true });

document.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    document.body.lastChild.remove(successElement);
  }
}, { once: true });

successElement.addEventListener('click', () => {
  document.body.lastChild.remove(successElement);
});

const errorElement = errorTemplate.cloneNode(true);

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    document.body.lastChild.remove(errorElement);
  }
}, { once: true });

document.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    document.body.lastChild.remove(errorElement);
  }
}, { once: true });

errorElement.addEventListener('click', () => {
  document.body.lastChild.remove(errorElement);
}, { once: true });

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

