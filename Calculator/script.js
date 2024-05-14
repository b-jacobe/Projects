let runningTotal = 0;
let buffer = '0';
let previousOperator = null; // Initialize previousOperator to null
const screen = document.querySelector('.number-input');

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
}

function handleNumber(value) {
  if (buffer === '0') {
    buffer = value;
  } else {
    buffer += value;
  }
}

function handleMath(value) {
  if (buffer === '0') {
    // do nothing
    return;
  }

  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = value;
  buffer = '0';
}

function flushOperation(intBuffer) {
  switch (previousOperator) {
    case '+':
      runningTotal += intBuffer;
      break;
    case '-':
      runningTotal -= intBuffer;
      break;
    case 'x':
      runningTotal *= intBuffer;
      break;
    case '÷':
      runningTotal /= intBuffer;
      break;
  }
}

function handleSymbol(value) {
  switch (value) {
    case 'C':
      buffer = '0';
      runningTotal = 0;
      previousOperator = null; // Reset the operator
      break;
    case '=':
      if (previousOperator !== null) {
        flushOperation(parseInt(buffer));
        previousOperator = null;
        buffer = runningTotal.toString();
        runningTotal = 0;
      }
      break;
    case '←':
      if (buffer.length === 1) {
        buffer = '0';
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    default:
      if ('+-x÷'.includes(value)) {
        handleMath(value);
      }
      break;
  }
}

function rerender() {
  screen.innerText = buffer;
}

function init() {
  document
    .querySelector('.calculator')
    .addEventListener('click', function (event) {
      if (event.target.tagName === 'BUTTON') {
        buttonClick(event.target.innerText);
      }
    });
}

init();
