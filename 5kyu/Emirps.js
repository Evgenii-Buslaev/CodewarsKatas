/* If you reverse the word "emirp" you will have the word "prime". That idea is related with the purpose of this kata: we should select all the primes that when reversed are a different prime (so palindromic primes should be discarded).

For example: 13, 17 are prime numbers and the reversed respectively are 31, 71 which are also primes, so 13 and 17 are "emirps". But primes 757, 787, 797 are palindromic primes, meaning that the reversed number is the same as the original, so they are not considered as "emirps" and should be discarded.

The emirps sequence is registered in OEIS as A006567

Your task
Create a function that receives one argument n, as an upper limit, and the return the following array:

[number_of_emirps_below_n, largest_emirp_below_n, sum_of_emirps_below_n]

Examples
find_emirp(10)
[0, 0, 0] ''' no emirps below 10 '''

find_emirp(50)
[4, 37, 98] ''' there are 4 emirps below 50: 13, 17, 31, 37; largest = 37; sum = 98 '''

find_emirp(100)
[8, 97, 418] ''' there are 8 emirps below 100: 13, 17, 31, 37, 71, 73, 79, 97; largest = 97; sum = 418 '''
Happy coding!!

Advise: Do not use a primality test. It will make your code very slow. Create a set of primes using a prime generator or a range of primes producer. Remember that search in a set is faster that in a sorted list or array */

/* function findEmirp(n) {
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
} */

function findEmirp(n) {
  let p = [];
  let sum = 0;
  for (let i = 10; i <= n; i++) {
    let prime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      let rprime = true;
      let reversen = i.toString();
      reversen = reversen.split("").reverse().join("");
      reversen = parseInt(reversen, 10);
      if (reversen <= i || reversen % 2 === 0) continue;
      for (let j = 2; j * j <= reversen; j++) {
        if (reversen % j === 0) {
          rprime = false;
          break;
        }
      }
      if (rprime) {
        p.push(i);
        sum += i;
        if (reversen <= n) {
          p.push(reversen);
          sum += reversen;
        }
      }
    }
  }
  p = p.sort((a, b) => a - b);
  return [p.length, p[p.length - 1], sum];
}

console.log(findEmirp(50));
