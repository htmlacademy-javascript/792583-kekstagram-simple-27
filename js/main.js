//ссылка на источник
//(https://learn.javascript.ru/task/random-int-min-max)
//функция возвращающая случайное целое число из переданного диапазона включительно
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

//функция проверяет строку на максимальную длинну
function checkMaxLength (str,maxLength) {
  if (str.length <= maxLength) {
    return true
  } return false
}
checkMaxLength()

//функция проверяет строку на минимальную и максимальную длинну
function checkMinMaxLength (str,maxLength) {
  if (str.length >= 20 && str.length <= maxLength) {
    return true
  } return false
}
checkMinMaxLength()
