/* Your program must find the longest sequence of consecutive zeroes in an integer number.

For example, the number 10002030000 has three sequences of zeroes with lengths 3, 1 and 4. So the longest sequence is 4.

Input :
A positive integer

Output :
The max number of consecutive zeros in that number

Restrictions :
Do it in less than 60 (59 or less) chars.

Note :
The number will always have 1 or more zeroes */

function f(num) {
  return num.toString().length < 60
    ? Object.entries(
        num
          .toString()
          .match(/0+/gi)
          .reduce((acc, curr) => {
            acc[curr] = curr.length;
            return acc;
          }, {})
      ).reduce((acc, curr) => {
        if (acc < curr[1]) {
          acc = curr[1];
        }
        return acc;
      }, 0)
    : null;
}

console.log(f(1002000));
