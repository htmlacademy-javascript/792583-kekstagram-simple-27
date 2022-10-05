//функция возвращающая случайное целое число из переданного диапазона включительно
function getRandomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  if (min < 0 && max <= min) {
    return NaN;
  }
  return Math.floor(rand);
}

//функция проверяет строку на максимальную длинну
function checkMaxLength (str,maxLength) {
  return str.length <= maxLength;
}
//функция проверяет строку на минимальную и максимальную длинну
function checkMinMaxLength (str,minLength,maxLength) {
  return str.length >= minLength && str.length <= maxLength;
}
//количество объектов
const objectCount = 25;
//
const createObject = () => ({
  id: getRandomInteger(1,25),
  url: `photos/${getRandomInteger(1,25)}.jpg`,
  description:'Photo with love',
  likes:getRandomInteger(15,200),
  comments:getRandomInteger(0,200),
});

//получаем массим обьектов

const getArrayObjects = Array.from({length: objectCount}, createObject);

//делаем массив от 1 до N
// const range = (N) => Array.from({length: N}, (v, k) => k+1);
//перемешиваем массив
//const arry = Array(25).fill(0).map((e,i)=>i+1)
