function smallestWord(sentence) {
  let array = sentence.split(" ");
  let sortedArray = array.sort((a, b) => {
    return a.length - b.length;
  });
  return sortedArray[0];
}

console.log(smallestWord("the smallest word in sentece"));
