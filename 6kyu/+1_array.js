/* Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6] */

function upArray(arr) {
  if (!arr.length) return null;

  const negative = arr.filter((n) => n < 0);
  const nonSingleDigit = arr.filter((n) => n.toString().length > 1);

  if (negative.length || nonSingleDigit.length) return null;

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] += 1;
    if (arr[i] === 10) {
      arr[i] = 0;
    } else {
      break;
    }

    if (i === 0 && arr[i] === 0) {
      arr.unshift(1);
    }
  }

  return arr;
}

console.log(upArray([9, 9, 9]));
