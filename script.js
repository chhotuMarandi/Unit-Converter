//selectors
// let buttons = document.querySelectorAll('.buttons');

// let unitOne = document.getElementById('unitOne');
// let unitTwo = document.getElementById('unitTwo');
//inputs

// let inputOne = document.getElementById('inputOne');
// let inputTwo = document.getElementById('inputTwo');

// let unitOneValue = unitOne.value;
// let unitTwoValue = unitTwo.value;
// let inputOneValue = inputOne.value;
// let inputTwoValue = inputTwo.value;
//buttons...

// Array.from(buttons).forEach((button) => {
//   button.addEventListener('click', (e) => {
//     // console.log(e.target);
//     inputOne = inputOne + e.target.innerHTML;
//     console.log(inputOne);
//   });
// });

// const btnValue = (e) => {
//   if (e.target !== e.currentTarget) {
//     let clickedItem = e.target.id;
//     // console.log(clickedItem);
//     inputOne.value += clickedItem;
//     console.log(inputOne);
//     let inputOneValue = inputOne.value;
//     // console.log(inputOneValue);
//   }
// };

// const convertResult = () => {
//   unitOneValue = unitOne.value;
//   unitTwoValue = unitTwo.value;

// inputOneValue = inputOne.value;
// inputTwoValue = inputTwo.value;
// console.log(inputOneValue);

//check conditions

//   if (unitOneValue === 'inch' && unitTwoValue === 'feet') {
//     inputTwo.value = (inputOne.value * 0.083).toFixed(2);
//   } else if (unitOneValue === 'inch' && unitTwoValue === 'cm') {
//     inputTwo.value = (inputOne.value * 2.54).toFixed(2);
//   } else if (unitOneValue === 'inch' && unitTwoValue === 'inch') {
//     inputTwo.value = inputOne.value;
//   } else if (unitOneValue === 'feet' && unitTwoValue === 'feet') {
//     inputTwo.value = inputOne.value;
//   } else if (unitOneValue === 'feet' && unitTwoValue === 'cm') {
//     inputTwo.value = (inputOne.value * 30.48).toFixed(2);
//   } else if (unitOneValue === 'feet' && unitTwoValue === 'inch') {
//     inputTwo.value = (inputOne.value * 12).toFixed(2);
//   } else if (unitOneValue === 'cm' && unitTwoValue === 'feet') {
//     inputTwo.value = (inputOne.value / 30.48).toFixed(2);
//   } else if (unitOneValue === 'cm' && unitTwoValue === 'cm') {
//     inputTwo.value = inputOne.value;
//   } else if (unitOneValue === 'cm' && unitTwoValue === 'inch') {
//     inputTwo.value = (inputOne.value / 2.54).toFixed(2);
//   }
// };

//Event Listener

// inputOne.addEventListener('input', convertResult);
// unitOne.addEventListener('change', convertResult);
// unitTwo.addEventListener('change', convertResult);
// keypad.addEventListener('click', btnValue);

let string = '';

let buttons = document.querySelectorAll('.buttons');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target);
    string = string + e.target.innerHTML;
    document.getElementById('input').value = string;
    console.log(string);
  });
});
