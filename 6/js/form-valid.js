const orderForm = document.querySelector('.img-upload__form');


// const pristine = new Pristine(orderForm, {
//   classTo: 'text__description',
//   errorTextParent: 'text__description',
//   errorTextClass: 'img-upload__message',
// });

// orderForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();

//   const isValid = pristine.validate();
//   if (isValid) {
//     console.log('Можно отправлять');
//   } else {
//     console.log('Форма невалидна');
//   }
// });

// function validateTextarea(value) {
//   return value.length >= 20 && value.length <= 140;
// }
// pristine.addValidator(orderForm.querySelector('.text__description'), validateTextarea,
//   'От 20 до 140 символов');

// // orderForm.addEventListener('submit', (evt) => {
// //   evt.preventDefault();
// //   pristine.validate();
// // });
