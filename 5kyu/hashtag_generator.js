/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false */

function generateHashtag(str) {
  let string = "#";
  // checking whether the str is empty
  let spaceChecker = 0;
  [...str].forEach((elem) => {
    if (elem !== " ") {
      spaceChecker++;
    }
  });

  if (spaceChecker == 0 || str.length === 0) {
    return false;
  }
  // building the hashtag
  let symbols = str.split(" ");
  for (let i = 0; i < symbols.length; i++) {
    if (symbols[i] !== "") {
      string += symbols[i][0].toUpperCase();
      for (let k = 1; k < symbols[i].length; k++) {
        if (symbols[i][k] != symbols[i][k].toUpperCase()) {
          string += symbols[i][k];
        }
      }
    }
  }
  if (string.length > 140) {
    return false;
  }
  return string;
}
