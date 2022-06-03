/*
We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999"
*/

// my solution
function numberToString(num) {
  return `${num}`;
}
// best practices
function numberToString(num) {
  return num.toString();
}
