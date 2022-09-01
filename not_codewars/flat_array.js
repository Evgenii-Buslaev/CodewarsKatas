let arr = [1, 2, [3, 4, [5]], 6, 7, [[8]]]

/* function flatArray(array) {
   const newArr = []
   for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
        newArr.push(...flatArray(array[i]))
    } else {
        newArr.push(array[i])
    }
   }
   return newArr
} */

function flatArray(array) {
   return array.flat(Infinity)
 }

console.log(flatArray(arr));