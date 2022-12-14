/* Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */

function sortArray(array) {
  let oddAr = [];

  array.forEach((elem) => {
    if (elem % 2) {
      oddAr.push(elem);
    }
  });

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2) {
      array.splice(i, 1, oddAr.sort(compare)[0]);
      oddAr.sort(compare).splice(0, 1);
    }
  }

  return array;
}

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
