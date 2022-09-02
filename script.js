const converter = () => {
  const inputOne = document.getElementById('inputOne').value;
  // console.log(input);
  const inputTwo = document.getElementById('inputTwo').value;
  // console.log(result);

  const selectorOne = document.getElementById('unitOne');
  const selectedValue = selectorOne.value;
  console.log(selectedValue);

  if (selectedValue == 'feet') {
    inputTwo = feetToMeter(inputOne);
  } else if (selectedValue == 'inch')
};
