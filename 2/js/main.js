function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  if (min < 0) {
    return NaN
  } else if (max <= min) {
    return NaN
  }
  return Math.floor(rand);
}
randomInteger(1, 3);

//ссылка на источник ниже
(https://learn.javascript.ru/task/random-int-min-max)
