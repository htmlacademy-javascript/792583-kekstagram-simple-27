import { renderSimilarList } from './show-photos.js';
import { getData } from './api.js';
import { closeUserModal } from './user-modal.js';
import { setUserFormSubmit } from './form-valid.js';
// import './user-modal.js';
// import './form-valid.js';
// import './scale-effect.js';

const SIMILAR_PICTURE_COUNT = 25;

getData((picture) => {
  renderSimilarList(picture.slice(0, SIMILAR_PICTURE_COUNT));
});
setUserFormSubmit(closeUserModal);
