function moveZeros(arr) {
  const zerosArray = arr.filter((value) => value === 0);
  const notZerosArray = arr.filter((value) => value !== 0);

  const zerosInTheFinalArray = notZerosArray.concat(zerosArray);

  return zerosInTheFinalArray;
}

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]

// const moveZeros = function (arr) {
//     return [
//       ...(arr.filter(n => n !== 0)),
//       ...(arr.filter(n => n === 0))
//     ];
//   } beeem javascripter
