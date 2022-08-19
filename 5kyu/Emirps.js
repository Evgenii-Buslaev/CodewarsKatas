function findEmirp(n) {
  let primesArray = [];
  let emirpsArray = [];

  let divisorsCounter = 0;
  // searching for primes
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n ** 0.5; j++) {
      if (Number.isInteger(i / j)) {
        divisorsCounter++;
      }
    }
    if (divisorsCounter < 3) {
      primesArray.push(i);
    }
    divisorsCounter = 0;
  }
  // reversing primes
  let arrayToCheck = primesArray.map((elem) => {
    return +[...elem.toString()].reverse().join("");
  });
  // checking whether a prime is emirps
  for (let i = 0; i < arrayToCheck.length; i++) {
    divisorsCounter = 0;
    for (let j = 0; j <= arrayToCheck[i]; j++) {
      if (Number.isInteger(arrayToCheck[i] / j)) {
        divisorsCounter++;
      }
    }
    if (
      divisorsCounter < 3 &&
      +[...arrayToCheck[i].toString()].reverse().join("") !== arrayToCheck[i]
    ) {
      emirpsArray.push(+[...arrayToCheck[i].toString()].reverse().join(""));
    }
  }

  // building result
  let maxEmirp = Math.max(...emirpsArray);
  let sumEmirp = emirpsArray.reduce((acc, curr) => {
    return acc + curr;
  });
  return [emirpsArray.length, maxEmirp, sumEmirp];
}

console.log(findEmirp(50));
