/* What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => [] */

/* function countLettersAmount(string) {
  return [...string].reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}

function isEqual(obj, anagram) {
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      if (obj[p] !== anagram[p]) return false;
    }
  }
  for (let p in anagram) {
    if (anagram.hasOwnProperty(p)) {
      if (obj[p] !== anagram[p]) return false;
    }
  }
  return true;
}

function anagrams(word, words) {
  const wordLetters = countLettersAmount(word);
  const anagramLetters = words.map((elem) => countLettersAmount(elem));

  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (isEqual(wordLetters, anagramLetters[i])) result.push(words[i]);
  }
  return result;
} */

function anagrams(word, words) {
  word = word.split("").sort().join("");
  return words.filter(function (v) {
    return word == v.split("").sort().join("");
  });
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
