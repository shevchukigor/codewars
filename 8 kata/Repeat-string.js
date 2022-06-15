/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

// my solution
function repeatStr(n, s) {
  let repeatedStr = "";
  for (let i = 0; i < n; i++) {
    repeatedStr += s;
  }
  return repeatedStr;
}
// best practices
function repeatStr(n, s) {
  return s.repeat(n);
}
