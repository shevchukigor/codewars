/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

// my solution
function removeEveryOther(arr) {
  newArr = [];
  for (let step = 0; step < arr.length; step = step + 2) {
    newArr.push(arr[step]);
  }
  return newArr;
}
// best practices
function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}
