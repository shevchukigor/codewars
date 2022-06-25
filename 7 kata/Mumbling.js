/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// my solution
function accum(s) {
  let words = s.toLowerCase().split("");
  let wordsArr = [];
  words.map((el, idx) =>
    wordsArr.push(
      Array(idx + 1)
        .fill(el, 0)
        .join("")
    )
  );
  let wordsArrCap = wordsArr.map((el) => el[0].toUpperCase() + el.slice(1));
  return wordsArrCap.join("-");
}
// best practices
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
