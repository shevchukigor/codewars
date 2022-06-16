/*
Simple, remove the spaces from the string, then return the resultant string.


*/

// my solution
function noSpace(x) {
  let arrChar = Array.from(x);
  let newArr = [];
  arrChar.forEach((el) => {
    if (el !== " ") {
      newArr.push(el);
    }
  });
  return newArr.join("");
}
// best practices
function noSpace(x) {
  return x.replace(/\s/g, "");
}
////
function noSpace(x) {
  return x.split(" ").join("");
}
