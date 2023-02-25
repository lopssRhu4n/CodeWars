function highAndLow(numbers) {
  const splitedNumbers = numbers.split(" ");

  const numArray = splitedNumbers.map((num) => parseInt(num, 10));

  const lowest = numArray.reduce((acc, cur) => (cur < acc ? cur : acc));

  const highest = numArray.reduce((acc, cur) => (cur > acc ? cur : acc));

  return `${highest} ${lowest}`;
}

// Math.max() e Math.min() Fazem a boa

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
