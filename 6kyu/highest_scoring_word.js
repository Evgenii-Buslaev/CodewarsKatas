/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.  */

function high(x) {
  let word = "";
  let arrayString = x.split(" ");
  let alphabet = [..."0abcdefghijklmnopqrstuvwxyz"];

  function alphabetIteration(array) {
    let score = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (array[i] === alphabet[j]) {
          score += j;
        }
      }
    }
    return score;
  }
  for (let i = 0; i < arrayString.length; i++) {
    if (alphabetIteration([...arrayString[i]]) > alphabetIteration([...word])) {
      word = arrayString[i];
    }
  }

  return word;
}
