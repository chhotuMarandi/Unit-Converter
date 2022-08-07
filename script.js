let display = document.getElementById('display');

// input.addEventListener('click', function () {
//   console.log('click');
// });

let buttons = Array.from(document.getElementsByClassName('buttons'));

buttons.map((buttons) => {
  buttons.addEventListener('click', (e) => {
    console.log(e.target.innerText);

    switch (e.target.innerText) {
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
