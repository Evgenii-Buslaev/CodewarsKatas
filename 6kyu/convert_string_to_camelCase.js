/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior" */

function toCamelCase(str) {
  let string;
  let array = [];

  if (str === "") {
    return "";
  }
  if (str.includes("-")) {
    string = str.split("-");
  }
  if (str.includes("_")) {
    string = str.split("_");
  }

  for (let i = 0; i < string.length; i++) {
    for (let k = 0; k < string[i].length; k++) {
      if (k === 0) {
        array.push(string[i][k].toUpperCase());
      } else {
        array.push(string[i][k]);
      }
    }
  }

  if (str[0] === str[0].toUpperCase()) {
    return array.join("");
  }

  array.shift();
  array.unshift(str[0]);

  return array.join("");
}
