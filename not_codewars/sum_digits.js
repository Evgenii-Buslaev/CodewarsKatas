function sumDigits(digit) {
  return [...Math.abs(digit).toString()].reduce((acc, curr) => acc + +curr, 0);
}

console.log(sumDigits(-52));
