/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// my solution
function XO(str) {
  let strArr = str.toLowerCase().split("");
  let counter = 0;
  strArr.forEach((el) => {
    if (el === "x") {
      counter++;
    }
    if (el === "o") {
      counter--;
    }
  });

  return counter === 0;
}
// best practices
function XO(str) {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
}
