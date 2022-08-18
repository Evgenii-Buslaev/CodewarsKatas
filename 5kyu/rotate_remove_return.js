/* Description
Give you a 2D array(n * n, n is an odd number more than 1), rotate it, remove elements, return the last surviving number.

arr=[
[3,5,8,4,2],
[1,9,2,3,8],
[4,6,7,2,2],
[7,5,5,5,5],
[6,5,3,8,1]
]
Rotate it in a counter clockwise direction:

2,8,2,5,1
4,3,2,5,8
8,2,7,5,3
5,9,6,5,5
3,1,4,7,6
Remove 1 maximum value and 1 minimum value of each row(remember, only remove 1 maximum value and 1 minimum value, not all of same, remove from left side)

2,2,5
4,3,5
7,5,3
6,5,5
3,4,6
Rotate again:

5,5,3,5,6
2,3,5,5,4
2,4,7,6,3
Remove again:

5,5,5
3,5,4
4,6,3
Rotate again:

5,4,3
5,5,6
5,3,4
Remove again:

4
5
4
Rotate again:

4,5,4
Remove again:

4
Return the last surviving number 4

Task
Complete function rotateAndRemove that accepts 1 argument arr. Returns the result in accordance with the rules above. */

function rotateAndRemove(array) {
  let rotatedArray = [];
  let copyRotated = [];
  let rotatedElement = [];

  // rotate first time
  for (let k = array[0].length; k >= 0; k--) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][k] === undefined) {
        continue;
      }
      rotatedElement.push(array[i][k]);
    }
    if (rotatedElement.length !== 0) {
      rotatedArray.push(rotatedElement);
      rotatedElement = [];
    }
  }

  // finding min and max
  let obj = {};
  for (let i = 0; i < rotatedArray.length; i++) {
    let max = rotatedArray[i].reduce((acc, curr) => {
      if (acc < curr) {
        acc = curr;
      }
      return acc;
    });
    let min = rotatedArray[i].reduce((acc, curr) => {
      if (acc > curr) {
        acc = curr;
      }
      return acc;
    });
    obj[i] = { max, min };
  }

  // making a copy of rotatedArray
  rotatedArray.forEach((elem) => copyRotated.push(elem));

  // deleting min and max
  for (let j = 0; j < rotatedArray.length; j++) {
    for (let k = 0; k < rotatedArray[j].length; k++) {
      if (obj[j].max === rotatedArray[j][k]) {
        copyRotated[j].splice([k], 1);
        break;
      }
    }
    for (let k = 0; k < rotatedArray[j].length; k++) {
      if (obj[j].min === rotatedArray[j][k]) {
        copyRotated[j].splice([k], 1);
        break;
      }
    }
  }

  //checkin wether result the surviving number
  if (copyRotated.length == 1) {
    return +copyRotated.join();
  } else {
    return rotateAndRemove(copyRotated);
  }
}
