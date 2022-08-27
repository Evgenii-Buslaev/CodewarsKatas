/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

 */

/* function rot13(message) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArray = [...alphabet];

  let clipheredMessage = "";
  for (let i = 0; i < message.length; i++) {
    let interationCounter = 0;
    for (let j = 0; j < alphabetArray.length; j++) {
      let iteraitionJ = j;
      if (message[i] === alphabetArray[j]) {
        interationCounter++;
        j += 13;
        if (j > alphabetArray.length - 1) {
          j = j - alphabetArray.length;
        }
        clipheredMessage += alphabetArray[j];
        j = iteraitionJ;
      }
      if (message[i] === alphabetArray[j].toUpperCase()) {
        interationCounter++;
        j += 13;
        if (j > alphabetArray.length - 1) {
          j = j - alphabetArray.length;
        }
        clipheredMessage += alphabetArray[j].toUpperCase();
        j = iteraitionJ;
      }
    }

    if (interationCounter === 0) {
      clipheredMessage += message[i];
    }
  }
  return clipheredMessage;
} */

function rot13(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const clipheredSymbols =
    "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(
    /[a-z]/gi,
    (element) => clipheredSymbols[alphabet.indexOf(element)]
  );
}

console.log(rot13("Test"));
