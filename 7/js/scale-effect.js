const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleTransform = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const SCALE_RANGE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
let scaleTransformValue = 100;

scaleTransform.value = `${scaleTransformValue}%`;

btnSmaller.addEventListener('click', () => {
  if (scaleTransformValue > MIN_SCALE) {
    scaleTransformValue -= SCALE_RANGE;
    scaleTransform.value = `${scaleTransformValue}%`;
    imgUploadPreview.style.transform = `scale(${scaleTransformValue / 100})`;
  }
});

btnBigger.addEventListener('click', () => {
  if (scaleTransformValue < MAX_SCALE) {
    scaleTransformValue += SCALE_RANGE;
    scaleTransform.value = `${scaleTransformValue}%`;
    imgUploadPreview.style.transform = `scale(${scaleTransformValue / 100})`;
  }
});

const inputChrome = document.querySelector('#effect-chrome');
inputChrome.addEventListener('click', () => {
  imgUploadPreview.classList.remove(imgUploadPreview.classList.item(0));
  imgUploadPreview.classList.add('effects__preview--chrome');
});
const inputNone = document.querySelector('#effect-none');
inputNone.addEventListener('click', () => {
  imgUploadPreview.classList.remove(imgUploadPreview.classList.item(0));
  imgUploadPreview.classList.add('effects__preview--none');
});
const inputSepia = document.querySelector('#effect-sepia');
inputSepia.addEventListener('click', () => {
  imgUploadPreview.classList.remove(imgUploadPreview.classList.item(0));
  imgUploadPreview.classList.add('effects__preview--sepia');
});
const inputMarvin = document.querySelector('#effect-marvin');
inputMarvin.addEventListener('click', () => {
  imgUploadPreview.classList.remove(imgUploadPreview.classList.item(0));
  imgUploadPreview.classList.add('effects__preview--marvin');
});
const inputPhobos = document.querySelector('#effect-phobos');
inputPhobos.addEventListener('click', () => {
  imgUploadPreview.classList.remove(imgUploadPreview.classList.item(0));
  imgUploadPreview.classList.add('effects__preview--phobos');
});
const inputHeat = document.querySelector('#effect-heat');
inputHeat.addEventListener('click', () => {
  imgUploadPreview.classList.remove(imgUploadPreview.classList.item(0));
  imgUploadPreview.classList.add('effects__preview--heat');
});
