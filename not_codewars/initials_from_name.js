function initialsFromName(name) {
  return name
    .split(" ")
    .map((elem) => elem[0].toUpperCase() + ".")
    .join("");
}

console.log(initialsFromName("Bill Gates"));
