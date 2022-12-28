/* Напишите функцию, которая проверяет, является ли слово палиндромом. */

function isPalindrome(string) {
  var palindrome = (string) =>
    string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() ==
    string
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase("")
      .split()
      .reverse()
      .join("")
      ? true
      : false;
}

console.log(isPalindrome("тест"));
