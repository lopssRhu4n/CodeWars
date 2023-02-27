function high(x) {
  const lettersBaseArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const phraseWordsArr = x.split(" ");

  let scoresArr = [];

  phraseWordsArr.forEach((word) => {
    const score = word
      .split("")
      .reduce(
        (score, letter) => (score += lettersBaseArr.indexOf(letter) + 1),
        0
      );
    scoresArr.push(score);
  });

  const highestScore = scoresArr.reduce((acc, cur) => (cur > acc ? cur : acc));

  const highestScoreWord = phraseWordsArr.find((word) => {
    const score = word
      .split("")
      .reduce(
        (score, letter) => (score += lettersBaseArr.indexOf(letter) + 1),
        0
      );

    return score == highestScore;
  });

  return highestScoreWord;
}
