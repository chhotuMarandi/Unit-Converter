const converter = () => {
  const inputOne = document.getElementById('inputOne').value;
  // console.log(input);
  const inputTwo = (document.getElementById('inputTwo').value = inputOne);
  // console.log(result);

  const selectorOne = document.getElementById('unitOne');
  const selectedValueOne = selectorOne.value;
  // console.log(selectedValueOne);

  const selectorTwo = document.getElementById('unitTwo');
  const selectedValueTwo = selectorTwo.value;
  console.log(selectedValueTwo);

  // const feetToMeter = (f) => {
  //   let feet = Math.round(f * 0.304);
  //   return feet;
  // };

  // if (selectedValueOne == 'feet' && selectedValueTwo == 'meter') {
  //   inputTwo = feetToMeter(inputOne);
  // } else if (selectedValueOne == 'inch' && selectedValueTwo == 'feet') {
  //   inputTwo = inchToFeet(inputOne);
  // }
};
