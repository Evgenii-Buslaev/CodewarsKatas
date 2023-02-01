/* Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord */

String.prototype.camelCase = function() {
    const wordsArray = this.trim().split(/\W/gi).filter(sym => sym !== '')
    return wordsArray.length > 0 ? wordsArray.map(word => word[0].toUpperCase() + word.slice(1, word.length)).join('') : ''
}

console.log("".camelCase());