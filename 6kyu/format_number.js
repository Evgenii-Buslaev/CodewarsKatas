/* Introduction
You need to write a function that will format a phone number by a template.

Task
You're given number and string.

If there are more digits than needed, they should be ignored

if there are less digits than needed, should return Invalid phone number

Examples
(79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
(79052479075, "+# (###) ### ##-##") => "+7 (905) 247 90-75"
(79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
(81237068908090, "+## ### ### ## ##") => "+81 237 068 90 80"
(8123706890, "+## ### ### ##-##") => "Invalid phone number"
(911, "###") => "911"
(112, "+ () -") => "+ () -" */

function formatNumber(number, template) {
  const hashAmount = [...template].reduce((acc, sym) => {
    if (sym === "#") {
      acc += 1;
    }
    return acc;
  }, 0);

  const numbers = [...number.toString()].map((num) => {
    if (!isNaN(+num)) {
      return num;
    }
  });

  if (numbers.length < hashAmount) {
    return "Invalid phone number";
  }

  numbers.length = hashAmount;

  const templateArray = [...template];
  for (let i = 0; i < templateArray.length; i++) {
    if (templateArray[i] === "#") {
      templateArray.splice(i, 1, numbers[0]);
      numbers.shift();
    }
  }

  return templateArray.join("");
}

console.log(formatNumber(79052479075, "+# ### ### ## ##"));
