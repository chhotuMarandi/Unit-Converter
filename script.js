let input = document.getElementById('input');

let buttons = document.getElementsByClassName('number');

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    input.value = this.id;
  });
}

const kuchbhi = () => {
    let inputValue =
}
