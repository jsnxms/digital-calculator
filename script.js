// Access the display element
const display = document.getElementById("display");

// Function to append values to the display
function appendDisplay(value) {
  // Add spaces around operators and replace symbols in display
  if (value === '*') {
    display.value += ' X ';
  } else if (value === '/') {
    display.value += ' ÷ ';
  } else if (['+', '-', '÷', 'X'].includes(value)) {
    display.value += ` ${value} `;
  } else {
    display.value += value;
  }
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to delete the last character
function deleteLast() {
  display.value = display.value.trim().slice(0, -1).trim();
}

// Function to calculate and display the result
function calculate() {
  try {
    // Replace X and ÷ with * and / for calculation
    let result = display.value.replace(/X/g, '*').replace(/÷/g, '/');
    display.value = eval(result);
  } catch (error) {
    display.value = "Error";
  }
}
