/* The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases (input -> output):

1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

90, 100 --> []
Enjoy it!! */

function sumDigPow(a, b) {
  let array = [];
  for (let i = a; i < b; i++) {
    array.push(i);
  }

  let digPowArray = [];
  let splittedElem;
  let value = 0;

  for (let k = 0; k < array.length; k++) {
    if (array[k] > 0 && array[k] < 10) {
      digPowArray.push(array[k]);
    }
    if (array[k].toString().length > 1) {
      splittedElem = array[k].toString().split("");
      for (let j = 0; j < splittedElem.length; j++) {
        value += (+splittedElem[j]) ** (j + 1);
      }
      value === array[k] ? digPowArray.push(array[k]) : (value = 0);
    }
  }

  return digPowArray;
}
