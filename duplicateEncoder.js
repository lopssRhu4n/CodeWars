function duplicateEncoder(word) {
  const stringArr = [...word];
  const ocurrences = stringArr.reduce((acc, cur) => {
    cur = cur.toLowerCase();
    return acc[cur] ? ++acc[cur] : (acc[cur] = 1), acc;
  }, {});

  const encodedArr = stringArr.map((letter) => {
    letter = letter.toLowerCase();
    if (ocurrences[letter] === 1) return "(";
    return ")";
  });

  const encodedStr = encodedArr.join("").replace(",", "");

  return encodedStr;
}

const encoded = duplicateEncoder("duplicada");

console.log(encoded);
