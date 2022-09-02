//selectors

let unitOne = document.getElementById('unitOne');
let unitTwo = document.getElementById('unitTwo');
//inputs
let inputOne = document.getElementById('inputOne');
let inputTwo = document.getElementById('inputTwo');

let unitOneValue = unitOne.value;
let unitTwoValue = unitTwo.value;

const convertResult = () => {
  unitOneValue = unitOne.value;
  unitTwoValue = unitTwo.value;

  //check conditions

  if (unitOneValue === 'inch' && unitTwoValue === 'feet') {
    inputTwo.value = inputOne.value * 0.083;
  } else if (unitOneValue === 'inch' && unitTwoValue === 'cm') {
    inputTwo.value = inputOne.value * 2.54;
  } else if (unitOneValue === 'inch' && unitTwoValue === 'inch') {
    inputTwo.value = inputOne.value;
  } else if (unitOneValue === 'feet' && unitTwoValue === 'feet') {
    inputTwo.value = inputOne.value;
  } else if (unitOneValue === 'feet' && unitTwoValue === 'cm') {
    inputTwo.value = (inputOne.value * 30.48).toFixed(2);
  } else if (unitOneValue === 'feet' && unitTwoValue === 'inch') {
    inputTwo.value = (inputOne.value * 12).toFixed(2);
  } else if (unitOneValue === 'cm' && unitTwoValue === 'feet') {
    inputTwo.value = (inputOne.value / 30.48).toFixed(2);
  } else if (unitOneValue === 'cm' && unitTwoValue === 'cm') {
    inputTwo.value = inputOne.value;
  } else if (unitOneValue === 'cm' && unitTwoValue === 'inch') {
    inputTwo.value = (inputOne.value / 2.54).toFixed(2);
  }
};

//Event Listener

inputOne.addEventListener('keyup', convertResult);
unitOne.addEventListener('change', convertResult);
unitTwo.addEventListener('change', convertResult);
