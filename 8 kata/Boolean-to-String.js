/*
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

// my solution
function booleanToString(b) {
  return b === true ? "true" : "false";
}
// best practices
function booleanToString(b) {
  return b.toString();
}
