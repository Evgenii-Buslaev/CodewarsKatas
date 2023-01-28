/* zipObject(['fred', 'barney'], [30, 40])
=> { 'fred': 30, 'barney': 40 }

zipObject([['fred', 30], ['barney', 40]])
=> { 'fred': 30, 'barney': 40 }
The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.

If only keys are given, then set the values to undefined.

zipObject(['fred', 'barney'])
{ fred: undefined, barney: undefined }
If neither keys nor values are specified, then return {}

zipObject()
{} */

const zipObject = (keys, values) => {
  const parsingType = keys.every((key) => typeof key === "object");
  if (!values) {
    if (!parsingType) {
      return keys.reduce((acc, key) => {
        acc[key] = undefined;
        return acc;
      }, {});
    } else {
      return keys.reduce((acc, key) => {
        acc[key[0]] = key[1];
        return acc;
      }, {});
    }
  } else {
    return keys.reduce((acc, key, i) => {
      acc[key] = values[i];
      return acc;
    }, {});
  }
};

console.log(
  zipObject([
    ["fred", 30],
    ["barney", 40],
  ])
);
