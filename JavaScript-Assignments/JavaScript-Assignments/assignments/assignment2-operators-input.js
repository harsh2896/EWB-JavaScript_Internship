// Assignment 2: Operators, Expressions, and Input Handling
// Uses prompt() in the browser. In Node.js (no prompt) it falls back to default values.

const ask = (message, fallback) =>
  typeof prompt === "function" ? prompt(message, fallback) : fallback;

// prompt() returns a string, so convert explicitly
const subtotal = Number(ask("Enter bill amount:", "100"));
const tipPercentage = Number(ask("Enter tip percentage:", "15"));

if (Number.isNaN(subtotal) || Number.isNaN(tipPercentage)) {
  console.log("Invalid input. Please enter numbers only.");
} else {
  let total = subtotal;                          // assignment operator
  const tip = (subtotal * tipPercentage) / 100;  // arithmetic operators
  total += tip;                                  // compound assignment

  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercentage}%`);
  console.log(`Calculated Tip: $${tip}`);
  console.log(`Total Amount to Pay: $${total}`);
}
