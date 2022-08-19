function procArrInt(listNum) {
  // counters and intermediate arrays
  let primesAmount = 0;
  let divisorsAmount = 0;
  let divisorsArray = [];
  let numbersArray = [];

  // counting divisors
  for (let i = 0; i < listNum.length; i++) {
    for (let j = listNum[i]; j > 0; j--) {
      if (Number.isInteger(listNum[i] / j)) {
        divisorsAmount++;
      }
      if (j === 1 && divisorsAmount < 3) {
        primesAmount++;
      }
    }
    divisorsArray.push({ divisorsAmount, number: listNum[i] });
    divisorsAmount = 0;
  }
  // counting largest divisors
  let largestDivisor = 0;
  divisorsArray.forEach((elem) => {
    if (elem.divisorsAmount >= largestDivisor) {
      largestDivisor = elem.divisorsAmount;
    }
  });
  // returning numbers with largest divisors
  divisorsArray.forEach((elem) => {
    if (elem.divisorsAmount === largestDivisor) {
      numbersArray.push(elem.number);
    }
  });

  // building returning result
  let result = [];

  result.push(listNum.length);
  result.push(primesAmount);
  result.push([
    largestDivisor,
    numbersArray.sort(function (a, b) {
      return a - b;
    }),
  ]);
  return result;
}

var list4 = [
  5, 396, 397, 145, 274, 286, 159, 422, 169, 44, 303, 433, 310, 450, 324, 326,
  91, 226, 229, 233, 106, 237, 499, 126,
];

console.log(procArrInt(list4));
