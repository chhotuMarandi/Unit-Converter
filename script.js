let inputOne = document.getElementById('inputOne');
let inputTwo = document.getElementById('inputTwo');
let unitOne = document.getElementById('unitOne');
let unitTwo = document.getElementById('unitTwo');
let unitOneValue, unitTwoValue;

//Event Listener

inputOne.addEventListener('keyup', myResult);
unitOne.addEventListener('change', myResult);
unitTwo.addEventListener('change', myResult);

unitOneValue = unitOne.value;
unitTwoValue = unitTwo.value;

function myResult() {
  unitOneValue = unitOne.value;
  unitTwoValue = unitTwo.value;

  if (unitOneValue === 'inch' && unitTwoValue === 'feet') {
    inputTwo.value = inputOne.vlaue * 0.0833;
    console.log(inputTwo);
  }
}
console.log(inputTwo);
// myResult();

// const unitValueOne = () => {
//   var selectValueOne = document.getElementById('unit_1').value;
//   console.log(selectValueOne);
// };

// const unitValueTwo = () => {
//   var selectValueTwo = document.getElementById('unit_2').value;
//   console.log(selectValueTwo);
// };

// var input_1 = document.getElementsByClassName('.input_1').value;
// var input_2 = document.getElementsByClassName('.input_2').value;

// function feetToInch() {
//   let feet = this.value;
//   selectValueOne = feet;
//   let inch = feet * 12;
//   selectValueTwo = inch 0`    `
//   inch.value = inch;
//   input_2 = inch;
// }

// feetToInch();

// let buttons = Array.from(document.getElementsByClassName('buttons'));

// buttons.map((buttons) => {
//   buttons.addEventListener('click', (e) => {
//     // console.log(e.target.innerText);

//     switch (e.target.innerText) {
//       case 'AC':
//         display.innerText = '';
//         break;
//       case '*':
//         if (display.innerText) {
//           display.innerText = display.innerText.slice(0, -1);
//         }
//         break;
//       default:
//         display.innerText += e.target.innerText;
//     }
//   });
// });
