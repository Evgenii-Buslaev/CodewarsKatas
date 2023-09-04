const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayOdd = [2, 4, 6, 8, 10];

const author = "Eugene";

cards = [
  {
    author: "Eugene",
  },
  {
    author: "Eugene",
  },
  {
    author: "Eugene",
  },
  {
    author: "dsadsd",
  },
  {
    author: "dsadsd",
  },
  {
    author: "dsadsd",
  },
];

const filterArray = (arr, name) => arr.filter((elem) => elem.author === name);

console.log(filterArray(cards, "Eugene"));
