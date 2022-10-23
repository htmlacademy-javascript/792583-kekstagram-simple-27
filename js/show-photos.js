import { getArrayPictures } from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const similarPictures = getArrayPictures();
const picturesListFragment = document.createDocumentFragment();

similarPictures.forEach(({ url, likes, comments }) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').setAttribute('src', url);
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  picturesListFragment.appendChild(pictureElement);

});
picturesContainer.appendChild(picturesListFragment);

export { picturesContainer };
