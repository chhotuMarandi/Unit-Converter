//selectors
let keypad = document.querySelector('#btn');

let unitOne = document.getElementById('unitOne');
let unitTwo = document.getElementById('unitTwo');
//inputs
let inputOne = document.getElementById('inputOne');
let inputTwo = document.getElementById('inputTwo');

let unitOneValue = unitOne.value;
let unitTwoValue = unitTwo.value;

const btnValue = (e) => {
  if (e.target !== e.currentTarget) {
    let clickedItem = e.target.id;
    console.log('hello' + clickedItem);
  }
};

const convertResult = () => {
  unitOneValue = unitOne.value;
  unitTwoValue = unitTwo.value;

  //buttons

  // let keypad = document.querySelector('#btn');

  // keypad.addEventListener('click', btnValue);

  // const btnValue = (e) => {
  //   if (e.target !== e.currentTarget) {
  //     let clickedItem = e.target.id;
  //     alert('hello' + clickedItem);
  //   }
  // };

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

  // if (unitOneValue === 'inch' && unitTwoValue === 'feet') {
  //   inputOne.value = inputTwo.value * 0.083;
  // } else if (unitOneValue === 'inch' && unitTwoValue === 'cm') {
  //   inputOne.value = inputTwo.value * 2.54;
  // } else if (unitOneValue === 'inch' && unitTwoValue === 'inch') {
  //   inputOne.value = inputTwo.value;
  // } else if (unitOneValue === 'feet' && unitTwoValue === 'feet') {
  //   inputOne.value = inputTwo.value;
  // } else if (unitOneValue === 'feet' && unitTwoValue === 'cm') {
  //   inputOne.value = (inputTwo.value * 30.48).toFixed(2);
  // } else if (unitOneValue === 'feet' && unitTwoValue === 'inch') {
  //   inputOne.value = (inputTwo.value * 12).toFixed(2);
  // } else if (unitOneValue === 'cm' && unitTwoValue === 'feet') {
  //   inputOne.value = (inputTwo.value / 30.48).toFixed(2);
  // } else if (unitOneValue === 'cm' && unitTwoValue === 'cm') {
  //   inputOne.value = inputTwo.value;
  // } else if (unitOneValue === 'cm' && unitTwoValue === 'inch') {
  //   inputOne.value = (inputTwo.value / 2.54).toFixed(2);
  // }
};

//Event Listener

inputOne.addEventListener('keyup', convertResult);
unitOne.addEventListener('change', convertResult);
unitTwo.addEventListener('change', convertResult);
keypad.addEventListener('click', btnValue);
