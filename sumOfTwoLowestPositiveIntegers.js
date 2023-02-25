function sumTwoSmallestNumbers(numbers) {
  const min1 = numbers.reduce((acc, cur) => {
    return cur < acc ? cur : acc;
  });

  const min1index = numbers.indexOf(min1);
  numbers.splice(min1index, 1);

  const min2 = numbers.reduce((acc, cur) => {
    return cur < acc ? cur : acc;
  });

  return min1 + min2;
}

// function sumTwoSmallestNumbers(numbers) {
//     var [ a, b ] = numbers.sort((a, b) => a - b)
//     return a + b
//   }
// Solução mais javascripter
