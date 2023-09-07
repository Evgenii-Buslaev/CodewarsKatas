const unsortedDigits = [
  2, 5, 1, 7, 5, 3, 6, 7, 8, 5, 4, 33, 55, 6, 44, 2, 12, 54, 43, 23, 12, 768465,
  4324, 34, 23423, 1432,
];

const chosingSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[indexMin]) {
        indexMin = j;
      }
    }
    let tmp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = tmp;
  }
  return arr;
};

console.log(chosingSort(unsortedDigits));
