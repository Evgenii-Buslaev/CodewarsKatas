/* Make me a window. I'll give you a number (N). You return a window.

Rules:

The window will always be 2 x 2.

The window needs to have N number of periods across and N number of periods vertically in each pane.

Example:

N = 3

---------
|...|...|
|...|...|
|...|...|
|---+---|
|...|...|
|...|...|
|...|...|
---------
Note: there should be no trailing new line characters at the end. */

function makeAWindow(num) {
  //string for concat
  let emptyStr = "";

  // string for window
  let result = "";

  // decloration of parts of inline string
  let partOfInlineStr = addSymbol(emptyStr, ".", num);
  let stick = "|";

  // function declaration for adding a symbol to inline part of window
  function addSymbol(str, sym, length) {
    let count = 1;
    if (str.length === 0) {
      str += sym;
      return addSymbol(str, sym, length);
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i] === sym) {
        count++;
      }
    }
    if (count <= length) {
      str += sym;
      return addSymbol(str, sym, length);
    }
    return str;
  }

  // making whole inline part of window
  let inlinePart =
    stick + partOfInlineStr + stick + partOfInlineStr + stick + "\n";
  let changableInlinePart = "";
  let begin = addSymbol(emptyStr, "-", inlinePart.length - 1) + "\n";
  let center = addSymbol(emptyStr, "-", num);
  let centerPart = stick + center + "+" + center + stick + "\n";
  let end = addSymbol(emptyStr, "-", inlinePart.length - 1);

  // declaration counter for counting inline items of window
  let counter = 0;

  // function declaration for creating the whole window
  function makeAllLines(num) {
    changableInlinePart += inlinePart;
    counter++;
    if (counter < num) {
      return makeAllLines(num);
    } else {
      return (result +=
        begin + changableInlinePart + centerPart + changableInlinePart + end);
    }
  }

  // creating the window
  return makeAllLines(num);
}
