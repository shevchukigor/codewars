/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// my solution
function isIsogram(str) {
  if (str === "") {
    return true;
  }
  return (
    str.toLowerCase() === [...new Set(str.toLowerCase().split(""))].join("")
  );
}

// best practices
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
///
