// Selecting elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    // Avoid appending undefined or = or C
    if (value === null || value === '=' || value === 'C') return;

    input += value;
    display.textContent = input;
  });
});

// Equal button logic
equals.addEventListener('click', () => {
  try {
    const result = eval(input);
    display.textContent = result;
    input = result.toString(); // Allow further operations
  } catch (err) {
    display.textContent = 'Error';
    input = '';
  }
});

// Clear button
clear.addEventListener('click', () => {
  input = '';
  display.textContent = '0';
});
