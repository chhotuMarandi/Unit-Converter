//selectors
// let buttons = document.querySelectorAll('.buttons');

//inputs

// let inputOne = document.getElementById('inputOne');

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

const input = document.getElementById('input');

const result = document.getElementById('result');

let keypad = document.querySelectorAll('.buttons');

const unitOne = document.getElementById('unitOne');

const unitTwo = document.getElementById('unitTwo');

let unitOneValue = unitOne.value;

let unitTwoValue = unitTwo.value;

keypad.forEach((btn) => {
  btn.addEventListener('click', () => {
    const clickedBtn = btn.id;
    // console.log(clickedBtn);
    if (clickedBtn == 'AC') {
      input.value = '';
      result.value = '';
    } else if (clickedBtn == 'C') {
      input.value = input.value.substr(0, input.value.length - 1);
    } else {
      input.value += clickedBtn;
    }

    // console.log(input.value);

    calculate();
  });
});

const converter = () => {};

const calculate = () => {
  unitOneValue = unitOne.value;
  unitTwoValue = unitTwo.value;

  if (unitOneValue === 'inch' && unitTwoValue === 'feet') {
    result.value = (input.value * 0.083).toFixed(2);
    // console.log(input.value);
  } else if (unitOneValue === 'inch' && unitTwoValue === 'cm') {
    result.value = (input.value * 2.54).toFixed(2);
  } else if (unitOneValue === 'inch' && unitTwoValue === 'inch') {
    result.value = input.value;
  } else if (unitOneValue === 'feet' && unitTwoValue === 'feet') {
    result.value = input.value;
  } else if (unitOneValue === 'feet' && unitTwoValue === 'cm') {
    result.value = (input.value * 30.48).toFixed(2);
  } else if (unitOneValue === 'feet' && unitTwoValue === 'inch') {
    result.value = (input.value * 12).toFixed(2);
  } else if (unitOneValue === 'cm' && unitTwoValue === 'feet') {
    result.value = (input.value / 30.48).toFixed(2);
  } else if (unitOneValue === 'cm' && unitTwoValue === 'cm') {
    result.value = input.value;
  } else if (unitOneValue === 'cm' && unitTwoValue === 'inch') {
    result.value = (input.value / 2.54).toFixed(2);
  }
};

// buttons.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     const clickedBtn = btn.id;
//     return clickedBtn;
//     console.log(clickedBtn);
//   });
// });

// const converter = () => {
// const buttonHandler = (button) => {
//   const buttons = button;
//   console.log(buttons);
//   switch (buttons) {
//     case 'AC':
//       input.value = '';
//       break;
//     case 'C':
//       input.value = input.value.substr(0, input.value.length - 1);
//       break;
//     default:
//       input.value += button;
//       break;
//     // console.log(input);
//   }
// console.log(typeof input.value);
// unitOneValue = unitOne.value;
// unitTwoValue = unitTwo.value;
// if (unitOneValue === 'inch' && unitTwoValue === 'feet') {
//   inputTwo.value = (input.value * 0.083).toFixed(2);
//   console.log(typeof inputTwo.value);
// } else if (unitOneValue === 'inch' && unitTwoValue === 'cm') {
//   inputTwo.value = (input.value * 2.54).toFixed(2);
// } else if (unitOneValue === 'inch' && unitTwoValue === 'inch') {
//   inputTwo.value = input.value;
// } else if (unitOneValue === 'feet' && unitTwoValue === 'feet') {
//   inputTwo.value = input.value;
// } else if (unitOneValue === 'feet' && unitTwoValue === 'cm') {
//   inputTwo.value = (input.value * 30.48).toFixed(2);
// } else if (unitOneValue === 'feet' && unitTwoValue === 'inch') {
//   inputTwo.value = (input.value * 12).toFixed(2);
// } else if (unitOneValue === 'cm' && unitTwoValue === 'feet') {
//   inputTwo.value = (input.value / 30.48).toFixed(2);
// } else if (unitOneValue === 'cm' && unitTwoValue === 'cm') {
//   inputTwo.value = input.value;
// } else if (unitOneValue === 'cm' && unitTwoValue === 'inch') {
//   inputTwo.value = (input.value / 2.54).toFixed(2);
// }
// };

// };

//Event Listener

input.addEventListener('keyup', calculate);
unitOne.addEventListener('change', calculate);
unitTwo.addEventListener('change', calculate);

//   if (unitOneValue === 'inch' && unitTwoValue === 'feet') {
//     inputTwo.value = (input.value * 0.083).toFixed(2);
//     console.log(inputTwo);
//   } else if (unitOneValue === 'inch' && unitTwoValue === 'cm') {
//     inputTwo.value = (input.value * 2.54).toFixed(2);
//   } else if (unitOneValue === 'inch' && unitTwoValue === 'inch') {
//     inputTwo.value = input.value;
//   } else if (unitOneValue === 'feet' && unitTwoValue === 'feet') {
//     inputTwo.value = input.value;
//   } else if (unitOneValue === 'feet' && unitTwoValue === 'cm') {
//     inputTwo.value = (input.value * 30.48).toFixed(2);
//   } else if (unitOneValue === 'feet' && unitTwoValue === 'inch') {
//     inputTwo.value = (input.value * 12).toFixed(2);
//   } else if (unitOneValue === 'cm' && unitTwoValue === 'feet') {
//     inputTwo.value = (input.value / 30.48).toFixed(2);
//   } else if (unitOneValue === 'cm' && unitTwoValue === 'cm') {
//     inputTwo.value = input.value;
//   } else if (unitOneValue === 'cm' && unitTwoValue === 'inch') {
//     inputTwo.value = (input.value / 2.54).toFixed(2);
//   }
// };

// buttons.forEach((button) => {
//   const action = button.getAttribute('name');
//   button.addEventListener('click', (e) => {
//     switch (action) {
//       case 'AC':
//         input.value = '';
//         break;
//       case 'C':
//         input.innerHTML = input.innerHTML.substring(
//           0,
//           input.innerHTML.length - 1
//         );
//         break;
//       default:
//         input.value += e.target.innerHTML;
//         break;
//     }
//   });
// });

// buttons.forEach((button) => {
//   const action = button.getAttribute('name');
//   button.addEventListener('click', (e) => {
//     switch (action) {
//       case 'AC':
//         input.value = '';
//         break;
//       case 'C':
//         input.innerHTML = input.innerHTML.substring(
//           0,
//           input.innerHTML.length - 1
//         );
//         break;
//       default:
//         input.value += e.target.innerHTML;
//         break;
//     }
//   });
// });

// Array.from(buttons).forEach((button) => {
//   const action = button.getAttribute('name');
//   button.addEventListener('click', (e) => {
//     if (action == 'AC') {
//       input.value = '';
//     } else if (action == 'X') {
//       input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
//     } else {
//       input.value += e.target.innerHTML;
//     }
//   });
// });
