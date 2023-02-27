// function zeros(n) {
//   if (n < 0) return -1;
//   let count = 0;
//   for (let i = 5; Math.floor(n / i) >= 1; i *= 5) count += Math.floor(n / i);
//   return count;
// }

function zeros(n) {
  return n / 5 < 1 ? 0 : Math.floor(n / 5) + zeros(n / 5);
}

console.log(zeros(5));
