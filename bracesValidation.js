function validBraces(braces) {
  const bracesArr = [...braces];
  if (bracesArr.length % 2 === 1) return false;

  let bracesCount = 0;
  let paranthesesCount;
  let bracketsCount;

  bracesArr.forEach((symbol) => {
    if (symbol == "{" || symbol == "}") bracesCount += 1;
  });

  console.log(bracesCount);
}

validBraces("()))"); // false
validBraces("(({{[[]]}}))"); //true
validBraces("(((({{"); //false
