import { getRandomPositiveInteger } from './util.js';

const OBJECT_COUNT = 25;

const createPictureObject = () => ({
  id: getRandomPositiveInteger(1, 25),
  url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
  description: 'Photo with love',
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200),
});
const getArrayPictures = () => Array.from({ length: OBJECT_COUNT }, createPictureObject);

export { getArrayPictures };

