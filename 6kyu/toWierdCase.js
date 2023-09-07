// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
  let result = "";
  const words = string.split(" ");
  words.forEach((word) => {
    let str = "";
    for (let i = 0; i < word.length; i += 2) {
      if (word[i]) {
        str += word[i].toUpperCase();
      }
      if (word[i + 1]) {
        str += word[i + 1].toLowerCase();
      }
    }
    result += " " + str;
  });
  return result.trim();
}
console.log(toWeirdCase("Welcome to Programiz!"));
