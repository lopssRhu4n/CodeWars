function findOutlier(integers) {
  let even = 0;
  let odd = 0;
  integers.forEach((num) => {
    num % 2 == 0 ? (even += 1) : (odd += 1);
  });

  let outlier;

  even > 1
    ? (outlier = integers.filter((val) => val % 2 != 0)[0])
    : (outlier = integers.filter((val) => val % 2 == 0)[0]);
  return outlier;
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
