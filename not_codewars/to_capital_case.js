function toCapitalCase(str) {
  return str
    .split(" ")
    .map((elem) => {
      let restWord = [...elem];
      let firstLetter = restWord[0].toUpperCase();
      restWord.splice(0, 1);
      return firstLetter + restWord.join("");
    })
    .join(" ");
}

console.log(toCapitalCase("I am trying to solve this kata by advanced method"));
