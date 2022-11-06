/* Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor() */

Math.round = function (number) {
  const dotIndex = [...number.toString()].findIndex((elem) => elem === ".");
  if (dotIndex === -1) return number;
  const decimal = number
    .toString()
    .slice(dotIndex + 1, number.toString().length);
  return +decimal[0] < 5
    ? +number.toString().slice(0, dotIndex)
    : +number.toString().slice(0, dotIndex) + 1;
};

Math.ceil = function (number) {
  const dotIndex = [...number.toString()].findIndex((elem) => elem === ".");
  return dotIndex !== -1 ? +number.toString().slice(0, dotIndex) + 1 : number;
};

Math.floor = function (number) {
  const dotIndex = [...number.toString()].findIndex((elem) => elem === ".");
  return dotIndex !== -1 ? +number.toString().slice(0, dotIndex) : number;
};

console.log(Math.round(0.6));
