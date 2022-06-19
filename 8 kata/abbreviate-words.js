/* 
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

// my solution
function abbrevName(name) {
  names = name.toUpperCase().split(" ");
  return `${names[0][0]}.${names[1][0]}`;
}
// best practices
function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}
