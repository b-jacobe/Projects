function buttonClick(value) {
  console.log(value);
}

function init() {
  document
    .querySelector('.calculator')
    .addEventListener('click', function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
