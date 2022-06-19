/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// my solution
function find_average(array) {
  return array.length === 0
    ? 0
    : array.reduce((prevVal, curVal) => prevVal + curVal) / array.length;
}
// best practices
