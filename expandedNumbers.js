function expandedForm(num) {
  const algArray = [...num.toString()];
  const arrLength = algArray.length;

  let expandedArr = [];

  for (let i = arrLength; i > 0; i--) {
    const expanded = algArray[i - 1] * 10 ** [arrLength - i];
    expandedArr.push(expanded);
  }

  const orderedExpandedArr = expandedArr.filter((n) => n != 0).reverse();

  return orderedExpandedArr.join(" + ");
}

expandedForm(12);
expandedForm(42);
expandedForm(70304);

// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");
// seems more javascripter
