/* You are given an input string.

For each symbol in the string if it's the first character occurrence, replace it with a '1', else replace it with the amount of times you've already seen it.

Examples:
input   =  "Hello, World!"
result  =  "1112111121311"

input   =  "aaaaaaaaaaaa"
result  =  "123456789101112"
There might be some non-ascii characters in the string. */

function numericals(s) {
  let result = "";
  const amount = [...s].reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    result += acc[letter];
    return acc;
  }, {});
  return result;
}

console.log(numericals("Hello, World!"));
