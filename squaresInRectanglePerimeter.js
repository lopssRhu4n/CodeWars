function perimeter(n) {
  let prevNumber = 0;
  let actualNumber = 1;
  let total;
  let totalPerimeter;

  if (n <= 2) {
    return (total = n - 1);
  }

  for (let count = 3; count <= n + 1; count++) {
    total = prevNumber + actualNumber;
    prevNumber = actualNumber;
    actualNumber = total;
  }

  return total * 16;
}

console.log(perimeter(20));
