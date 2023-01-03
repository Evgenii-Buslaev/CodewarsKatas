function moreZeros(s) {
  const booleanArray = [...s]
    .map((sym) => sym.charCodeAt().toString(2))
    .map((binary) => {
      const amount = [...binary].reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
      }, {});
      if (amount[0] > amount[1]) {
        return true;
      }
      return false;
    });

  return Array.from(
    new Set(
      [...s].filter((sym, i) => {
        if (booleanArray[i]) {
          return sym;
        }
      })
    )
  );
}

console.log(moreZeros("abcde"));
