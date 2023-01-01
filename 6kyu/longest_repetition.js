/* For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue. */

function longestRepetition(s) {
  const repeatedChars = s.match(/(.)\1*/g);

  if (!repeatedChars) return ["", 0];

  const longestLength = Math.max(...repeatedChars.map((str) => str.length));
  const longestChars = repeatedChars.find(
    (str) => str.length === longestLength
  );

  return [longestChars[0], longestLength];
}

console.log(longestRepetition("aaaabb"));
