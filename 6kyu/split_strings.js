/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

function solution(str) {
  if (!str.length) return [];
  const result = [];

  let i = 0;
  while (i < str.length) {
    result.push(str.slice(i, i + 2));
    i += 2;
  }

  if (result[result.length - 1].length !== 2) {
    result[result.length - 1] += "_";
  }

  return result;
}

console.log(solution("abcdef"));
