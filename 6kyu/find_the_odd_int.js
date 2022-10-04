/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

/* function findOdd(array) {
  const pairs = array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const pair = Object.entries(pairs).filter((pair) => pair[1] % 2 !== 0)[0];

  return +pair[0];
} */

function findOdd(arr) {
  return arr.find((item) => arr.filter((el) => el == item).length % 2);
}

console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
