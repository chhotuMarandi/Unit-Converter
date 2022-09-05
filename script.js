// Selectors...

const input = document.getElementById('input');

const result = document.getElementById('result');

let keypad = document.querySelectorAll('.buttons');

const unitOne = document.getElementById('unitOne');

const unitTwo = document.getElementById('unitTwo');

let unitOneValue = unitOne.value;

let unitTwoValue = unitTwo.value;

//Buttons Event Handler...

keypad.forEach((btn) => {
  btn.addEventListener('click', () => {
    const clickedBtn = btn.id;

    switch (clickedBtn) {
      case 'AC':
        input.value = '';
        result.value = '';
        break;
      case 'C':
        input.value = input.value.substr(0, input.value.length - 1);
        break;
      default:
        input.value += clickedBtn;
        break;
    }

    calculate();
  });
});

// Function for Calculate input value...

const calculate = () => {
  unitOneValue = unitOne.value;
  unitTwoValue = unitTwo.value;

  if (unitOneValue === 'inch' && unitTwoValue === 'feet') {
    result.value = (input.value * 0.083).toFixed(2);
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
  } else if (unitOneValue === 'meter' && unitTwoValue === 'km') {
    result.value = (input.value / 1000).toFixed(4);
  } else if (unitOneValue === 'meter' && unitTwoValue === 'mile') {
    result.value = (input.value / 1609.344).toFixed(4);
  } else if (unitOneValue === 'meter' && unitTwoValue === 'meter') {
    result.value = input.value;
  } else if (unitOneValue === 'km' && unitTwoValue === 'meter') {
    result.value = (input.value * 1000).toFixed(2);
  } else if (unitOneValue === 'km' && unitTwoValue === 'mile') {
    result.value = (input.value / 1.609).toFixed(2);
  } else if (unitOneValue === 'km' && unitTwoValue === 'km') {
    result.value = input.value;
  } else if (unitOneValue === 'mile' && unitTwoValue === 'km') {
    result.value = (input.value * 0.62137).toFixed(2);
  } else if (unitOneValue === 'mile' && unitTwoValue === 'meter') {
    result.value = (input.value * 1609.344).toFixed(2);
  } else if (unitOneValue === 'mile' && unitTwoValue === 'mile') {
    result.value = input.value;
  }
};

//Event Listener...

input.addEventListener('keyup', calculate);
unitOne.addEventListener('change', calculate);
unitTwo.addEventListener('change', calculate);
