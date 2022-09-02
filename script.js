//selectors

const unitOne = document.getElementById('unitOne');
const unitTwo = document.getElementById('unitTwo');
//inputs
const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');

//Event Listener

inputOne.addEventListener('input', convertResult);
unitOne.addEventListener('change', convertResult);
unitTwo.addEventListener('change', convertResult);

const unitOneValue = unitOne.value;
const unitTwoValue = unitTwo.value;

const convertResult = () => {
  unitOneValue = unitOne.value;
  unitTwoValue = unitTwo.value;

  //check conditions 

  if(unitOneValue === 'inch')
};
