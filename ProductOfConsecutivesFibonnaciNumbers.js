function findFibonacci(n) {
  let prevNumber = 0;
  let actualNumber = 1;
  let total;

  if (n <= 2) {
    return (total = n - 1);
  }

  for (let count = 3; count <= n + 1; count++) {
    total = prevNumber + actualNumber;
    prevNumber = actualNumber;
    actualNumber = total;
  }

  return total;
}

function productFib(prod) {
  let i = 0;
  let returnArr = [];
  let fib1 = 0;
  let fib2 = 0;

  for (let i = 0; fib1 * fib2 < prod; i++) {
    fib1 = findFibonacci(i - 1);
    fib2 = findFibonacci(i);

    fib1 * fib2 == prod
      ? (returnArr = [fib1, fib2, true])
      : (returnArr = [fib1, fib2, false]);
  }

  return returnArr;
}

productFib(5895);

// function productFib(prod){
//   let [a, b] = [0, 1];
//   while(a * b < prod) [a, b] = [b, a + b];
//   return [a, b, a * b === prod];
// }
