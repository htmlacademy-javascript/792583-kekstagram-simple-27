const SCALE_RANGE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const IMAGE_FILTERS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const btnSmaller = document.querySelector('.scale__control--smaller');
const btnBigger = document.querySelector('.scale__control--bigger');
const scale = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const slider = document.querySelector('.effect-level__slider');
const effectLavel = document.querySelector('.effect-level__value');

let defaultScale = 100;

const returnOriginScale = () => {
  defaultScale = 100;
  scale.value = `${defaultScale}%`;
  image.style.transform = `scale(${defaultScale / MAX_SCALE})`;
};

btnSmaller.addEventListener('click', () => {
  if (defaultScale > MIN_SCALE) {
    defaultScale -= SCALE_RANGE;
    scale.value = `${defaultScale}%`;
    image.style.transform = `scale(${defaultScale / MAX_SCALE})`;
  }
});

btnBigger.addEventListener('click', () => {
  if (defaultScale < MAX_SCALE) {
    defaultScale += SCALE_RANGE;
    scale.value = `${defaultScale}%`;
    image.style.transform = `scale(${defaultScale / MAX_SCALE})`;
  }
});

const DEFAULT_EFFECT = IMAGE_FILTERS[0];
let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  slider.classList.remove('hidden');
  slider.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });
  if (isDefault()) {
    slider.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = IMAGE_FILTERS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  image.style.filter = 'none';
  image.className = '';
  effectLavel.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = slider.noUiSlider.get();
  image.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  image.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLavel.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(slider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

updateSlider();

form.addEventListener('change', onFormChange);
slider.noUiSlider.on('update', onSliderUpdate);

export {
  returnOriginScale,
  resetEffects
};
