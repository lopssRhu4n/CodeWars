//1000 = M 100 = C 10 = X 1 = I
//500 = D 50 = L 5 = V
function solution(number) {
  let romanNumbersArr = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]];
  const numberArr = number.toString().split("").reverse();

  let romanArr = [];

  numberArr.forEach((house, index) => {
    if (house == 0) return;
    const rest = house - 5;

    if (rest < -1) {
      romanArr.push(romanNumbersArr[index][0].repeat(house));
      return;
    }

    if (rest > 0 && rest < 4) {
      romanArr.push(
        romanNumbersArr[index][1] + romanNumbersArr[index][0].repeat(house - 5)
      );
    }

    switch (rest) {
      case 0:
        romanArr.push(romanNumbersArr[index][1]);
        break;
      case -1:
        romanArr.push(romanNumbersArr[index][0] + romanNumbersArr[index][1]);
        break;
      case 4:
        romanArr.push(
          romanNumbersArr[index][0] + romanNumbersArr[index + 1][0]
        );
        break;
    }
  });

  console.log(romanArr.reverse().join(""));
}

solution(12);
