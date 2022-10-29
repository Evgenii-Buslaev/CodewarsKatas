/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return (
    Object.keys(
      [...string].reduce((acc, letter) => {
        acc[letter.toLowerCase()] = (acc[letter] || 0) + 1;
        return acc;
      }, {})
    ).filter((letter) => letter !== " " && letter !== ".").length >=
    alphabet.length
  );
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
