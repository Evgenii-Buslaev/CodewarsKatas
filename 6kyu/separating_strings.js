/* Create a function that takes a string and separates it into a sequence of letters.

The array will be formatted as so:

[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]
The function should separate each word into individual letters, with the first word in the sentence having its letters in the 0th index of each 2nd dimension array, and so on.

Shorter words will have an empty string in the place once the word has already been mapped out. (See the last element in the last part of the array.)

Examples:

sepStr("Just Live Life Man")
// => [['J','L','L','M'],
// => ['u','i','i','a'],
// => ['s','v','f','n'],
// => ['t','e','e','']]);

sepStr("The Mitochondria is the powerhouse of the cell")
// => [ [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
// => [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
// => [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
// => [ '', 'o', '', '', 'e', '', '', 'l' ],
// => [ '', 'c', '', '', 'r', '', '', '' ],
// => [ '', 'h', '', '', 'h', '', '', '' ],
// => [ '', 'o', '', '', 'o', '', '', '' ],
// => [ '', 'n', '', '', 'u', '', '', '' ],
// => [ '', 'd', '', '', 's', '', '', '' ],
// => [ '', 'r', '', '', 'e', '', '', '' ],
// => [ '', 'i', '', '', '', '', '', '' ],
// => [ '', 'a', '', '', '', '', '', '' ]] */

function sepStr(str) {
  let finalArray = [];
  let wordsLength = [];
  let emptyArray;
  let word = str.split(" ");
  word.forEach((elem) => wordsLength.push(elem.length));
  let biggestLength = wordsLength.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr;
    }
    return acc;
  }, 0);

  for (let i = 0; i < biggestLength; i++) {
    emptyArray = [];
    for (let k = 0; k < word.length; k++) {
      word[k][i] === undefined
        ? emptyArray.push("")
        : emptyArray.push(word[k][i]);
    }
    finalArray.push(emptyArray);
  }
  return finalArray;
}
