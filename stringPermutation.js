function permutations(string) {
  if (string.length == 1) return [string];

  let anagramsArr = [];

  for (subStr of permutations(string.slice(1))) {
    for (var i = 0; i < string.length; i++) {
      anagramsArr.push(
        subStr.slice(0, i) + string.slice(0, 1) + subStr.slice(i)
      );
    }
  }

  return anagramsArr.filter((val, i) => anagramsArr.indexOf(val) === i);
}

console.log(permutations("aabb"));
