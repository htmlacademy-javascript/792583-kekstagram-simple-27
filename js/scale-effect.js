const SCALE_RANGE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');
const inputChrome = document.querySelector('#effect-chrome');
const inputNone = document.querySelector('#effect-none');
const inputSepia = document.querySelector('#effect-sepia');
const inputMarvin = document.querySelector('#effect-marvin');
const inputPhobos = document.querySelector('#effect-phobos');
const inputHeat = document.querySelector('#effect-heat');

const scaleImage = (value = DEFAULT_SCALE) => {
  image.style.transform = `scale(${value / DEFAULT_SCALE})`;
  scaleInput.value = `${value}%`;
};

const onBtnSmallerClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - SCALE_RANGE;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onBtnBiggerClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + SCALE_RANGE;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => {
  scaleImage();
};
const resetEffect = () => {
  image.classList.remove(image.classList.item(0));
};

btnSmaller.addEventListener('click', onBtnSmallerClick);
btnBigger.addEventListener('click', onBtnBiggerClick);

inputChrome.addEventListener('click', () => {
  resetEffect();
  image.classList.add('effects__preview--chrome');
});

inputNone.addEventListener('click', () => {
  resetEffect();
  image.classList.add('effects__preview--none');
});

inputSepia.addEventListener('click', () => {
  resetEffect();
  image.classList.add('effects__preview--sepia');
});

inputMarvin.addEventListener('click', () => {
  resetEffect();
  image.classList.add('effects__preview--marvin');
});

inputPhobos.addEventListener('click', () => {
  resetEffect();
  image.classList.add('effects__preview--phobos');
});

inputHeat.addEventListener('click', () => {
  resetEffect();
  image.classList.add('effects__preview--heat');
});

export { resetScale, resetEffect };
