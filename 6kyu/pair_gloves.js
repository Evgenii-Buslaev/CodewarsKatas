/* Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs) */

function numberOfPairs(gloves) {
  const glovesCollection = {};

  let pairs = 0;

  for (let i = 0; i < gloves.length; i++) {
    if (gloves[i] in glovesCollection) {
      glovesCollection[gloves[i]] += 1;
    } else {
      glovesCollection[gloves[i]] = 1;
    }
  }

  Object.values(glovesCollection).forEach((type) => {
    if (type % 2) {
      pairs = pairs + (type - 1) / 2;
    } else {
      pairs = pairs + type / 2;
    }
  });

  return pairs;
}

console.log(
  numberOfPairs(["gray", "black", "purple", "purple", "gray", "black"])
);
