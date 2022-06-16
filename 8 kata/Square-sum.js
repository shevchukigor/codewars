/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

// my solution
function squareSum(numbers) {
  let squares = numbers.map((el) => el ** 2);
  let initVal = 0;
  return squares.reduce((prev, cur) => prev + cur, initVal);
}
// best practices
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}
////
function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}
