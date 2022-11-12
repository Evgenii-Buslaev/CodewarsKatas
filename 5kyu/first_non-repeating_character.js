/* Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests. */

function firstNonRepeatingLetter(s) {
  const amount = Object.entries(
    [...s].reduce((acc, letter) => {
      acc[letter.toLowerCase()] = (acc[letter.toLowerCase()] || 0) + 1;
      return acc;
    }, {})
  );
  const firstRepeating = amount.find((entry) => entry[1] === 1);
  return firstRepeating
    ? [...s].find((letter) => letter.toLowerCase() === firstRepeating[0])
    : "";
}

console.log(firstNonRepeatingLetter("stress"));
