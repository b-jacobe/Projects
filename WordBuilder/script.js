let buffer = '';
const screen = document.querySelector('.word-output');

function buttonClick(value) {
  if (value === 'Space' || value === '←' || value === 'Clear') {
    handleSymbol(value);
  } else {
    handleChar(value);
  }
  rerender();
}

function handleChar(value) {
  if (buffer === '') {
    buffer = value;
  } else {
    buffer += value;
  }
}

function handleSymbol(value) {
  switch (value) {
    case 'Space':
      buffer += ' ';
      break;
    case '←':
      if (buffer.length === 1) {
        buffer = '';
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case 'Clear':
      buffer = '';
      break;
  }
}

function rerender() {
  screen.innerText = buffer;
}

function init() {
  document
    .querySelector('.word-body')
    .addEventListener('click', function (event) {
      if (event.target.tagName === 'BUTTON') {
        buttonClick(event.target.innerText);
      }
    });
}

init();
