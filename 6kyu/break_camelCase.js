/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

// complete the function
function solution(string) {
  let result = [];
  [...string].forEach((elem) => {
    let n = elem.toLowerCase();
    n == elem ? result.push(elem) : result.push(" " + elem);
  });
  return result.join("");
}
