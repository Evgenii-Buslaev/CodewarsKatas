/* Напишите функцию, которая проверяет, является ли слово палиндромом. */

function isPalindrome(string) {
  return string === [...string].reverse().join("");
}

console.log(isPalindrome("тест"));
