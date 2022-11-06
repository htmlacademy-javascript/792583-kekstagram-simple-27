import { getRandomPositiveInteger } from './util.js';

const OBJECT_COUNT = 25;
// const createPhotosInteger = createRandomIdFromRangeGenerator(1, OBJECT_COUNT);
// const createIdInteger = getRandomPositiveInteger(1, 25);

const createPictureObject = (elem, number) => ({
  id: number + 1,
  url: `photos/${number + 1}.jpg`,
  description: 'Photo with love',
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200),
});
const getArrayPictures = () => Array.from({ length: OBJECT_COUNT }, createPictureObject);

export { getArrayPictures };

