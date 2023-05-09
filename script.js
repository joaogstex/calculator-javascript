let lastInput = '';
let output = '';

function isNumber(value) {
  return !isNaN(value);
}

function addInput(value) {
  if (lastInput === '=' && isNumber(value)) {
    output = '';
  }
  output += value;
  document.getElementById('output').innerHTML = output;
  lastInput = value;
}

function clearOutput() {
  output = '';
  document.getElementById('output').innerHTML = output;
}

function backspace() {
  output = output.slice(0, -1);
  document.getElementById('output').innerHTML = output;
  lastInput = output.slice(-1);
}

function calculate() {
  if (isNumber(lastInput)) {
    try {
      output = eval(output);
      if (isNaN(output)) {
        output = 'Error';
      }
    } catch (err) {
      output = 'Error';
    }
    document.getElementById('output').innerHTML = output;
    lastInput = '=';
  }
}