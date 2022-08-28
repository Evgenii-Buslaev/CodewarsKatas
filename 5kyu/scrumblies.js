/* Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False */

function scramble(str1, str2) {
  let counter = 0;
  let str = [...str1];

  for (let i = 0; i < str2.length; i++) {
    if (str.indexOf(str2[i]) >= 0) {
      str.splice(str.indexOf(str2[i]), 1);
      counter++;
    }
  }

  if (counter === str2.length) {
    return true;
  }
  return false;
}

console.log(scramble("katas", "steak"));
