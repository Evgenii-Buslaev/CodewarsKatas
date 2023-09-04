// DESCRIPTION:
// Task
// Christmas is coming, and your task is to build a custom Christmas tree with the specified characters and the specified height.

// Inputs:
// chars: the specified characters.
// n: the specified height. A positive integer greater than 2.
// Output:
// A multiline string. Each line is separated by \n. A tree contains two parts: leaves and trunks.
// The leaves should be n rows. The first row fill in 1 char, the second row fill in 3 chars, and so on. A single space will be added between two adjust chars, and some of the necessary spaces will be added to the left side, to keep the shape of the tree. No space need to be added to the right side.

// The trunk should be at least 1 unit height, it depends on the value of the n. The minimum value of n is 3, and the height of the tree trunk is 1 unit height. If n increased by 3, and the tree trunk increased by 1 unit. For example, when n is 3,4 or 5, trunk should be 1 row; when n is 6,7 or 8, trunk should be 2 row; and so on.

// Still not understand the task? Look at the following example ;-)

// Examples
// For chars = "*@o" and n = 3,the output should be:

//   *
//  @ o
// * @ o
//   |
// For chars = "*@o" and n = 6,the output should be:

//      *
//     @ o
//    * @ o
//   * @ o *
//  @ o * @ o
// * @ o * @ o
//      |
//      |
// For chars = "1234" and n = 6,the output should be:

//      1
//     2 3
//    4 1 2
//   3 4 1 2
//  3 4 1 2 3
// 4 1 2 3 4 1
//      |
//      |
// For chars = "123456789" and n = 3,the output should be:

//   1
//  2 3
// 4 5 6
//   |

function customChristmasTree(chars, n) {
  // drawing tree
  let str = "";
  let charIndex = 0;
  const spacesAmount = n * 2 - 1;
  for (let i = 1; i <= n; i++) {
    let rowSymbols = "";
    for (let j = 0; j < i; j++) {
      rowSymbols += chars[charIndex];
      if (charIndex === chars.length - 1) {
        charIndex = 0;
      } else {
        charIndex++;
      }
    }
    let row = rowSymbols.split("").join(" ");
    if (row.length < spacesAmount) {
      row = `${" ".repeat(spacesAmount / 2 - i + 1)}${row}`;
    }
    str += row + "\n";
  }

  // drawing trunks
  const trunkAmount = Math.floor(n / 3);
  let trunkSpacesAmount = Math.floor((n * 2 - 1) / 2);
  for (let i = 0; i < trunkAmount; i++) {
    if (i !== trunkAmount - 1) {
      str += `${" ".repeat(trunkSpacesAmount)}|\n`;
      continue;
    }
    str += `${" ".repeat(trunkSpacesAmount)}|`;
  }
  return str;
}

console.log(customChristmasTree("*@o", 4));
