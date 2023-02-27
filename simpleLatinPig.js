function pigIt(str) {
  const wordsArr = str.split(" ");

  const piggedArr = wordsArr.map((word) => {
    if (word[0] == "!" || word[0] == "?") return word[0];

    const splitedWord = word.split("");
    const firstLetter = splitedWord.shift();

    splitedWord.push(firstLetter);
    splitedWord.push("ay");

    const finalArr = splitedWord.join("");

    return finalArr;
  });

  return piggedArr.join(" ");
}

console.log(pigIt("Pig latin is cool"));
