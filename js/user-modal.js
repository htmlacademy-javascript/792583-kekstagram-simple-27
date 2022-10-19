const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

const btnFormLoad = document.querySelector('.img-upload__label');
const formCreateImage = document.querySelector('.img-upload__overlay');
const documentBody = document.querySelector('body');
const formCloseBtn = document.querySelector('#upload-cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};
function openUserModal() {
  formCreateImage.classList.remove('hidden');
  documentBody.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}
function closeUserModal() {
  formCreateImage.classList.add('hidden');
  documentBody.classList.remove('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

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