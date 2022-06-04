/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// my solution
function countPositivesSumNegatives(input) {
  if (input === null) {
    return [];
  }
  counter = 0;
  sum = 0;
  input.forEach((el) => {
    if (el > 0) {
      counter++;
    }
    if (el < 0) {
      sum = sum + el;
    }
  });
  if (counter === 0 && sum === 0) {
    return input;
  }

  return [counter, sum];
}
// best practices
function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }

  return [positive, negative];
}
////
function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}
