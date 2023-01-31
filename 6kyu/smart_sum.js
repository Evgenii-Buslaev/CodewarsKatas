/* Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.

smartSum(1,2,3,[4,5],6); // returns 21
smartSum(1,2,[[3,4],5],6); // returns 2 */

/* function smartSum() {
  const res = [];
  const sequence = Array.from(arguments).flat();

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] instanceof Array) {
      sequence[i].flat().forEach((elem) => res.push(elem));
    } else {
      res.push(sequence[i]);
    }
  }

  return res.reduce((acc, curr) => acc + curr);
} */

function smartSum() {
  return Array.from(arguments)
    .flat(Infinity)
    .reduce((acc, curr) => acc + curr);
}

console.log(smartSum([1, [2]], 3));
