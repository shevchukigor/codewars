/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.
*/

// my solution
var countSheep = function (num) {
  let murmur = "";
  let counter = 1;
  while (num > 0) {
    murmur = murmur + `${counter} sheep...`;
    num--;
    counter++;
  }
  return murmur;
};
// best practices
var countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};
