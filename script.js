let display = document.getElementById('display');

// display.map((display) => {
//   display.addEventListener('click', (e) => {
//     console.log('one');
//     console.log(e.target);
//   });
// });

let buttons = Array.from(document.getElementsByClassName('buttons'));

buttons.map((buttons) => {
  buttons.addEventListener('click', (e) => {
    // console.log(e.target.innerText);

    switch (e.target.innerText) {
      case 'AC':
        display.innerText = '';
        break;
      case '*':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});

// for (i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function () {
//     input.value = this.id;
//   });
// }
