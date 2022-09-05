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
  }
};

//Event Listener...

input.addEventListener('keyup', calculate);
unitOne.addEventListener('change', calculate);
unitTwo.addEventListener('change', calculate);
