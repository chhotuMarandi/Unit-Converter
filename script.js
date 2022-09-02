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
