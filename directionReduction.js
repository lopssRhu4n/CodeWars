function dirReduc(arr) {
  const oposites = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST",
  };

  let finished = false;
  let prevArr = arr;

  while (!finished) {
    const filtredArr = prevArr.filter((direction, index, array) => {
      let willBeFiltred;
      if (
        array[index + 1] == oposites[direction] ||
        array[index - 1] == oposites[direction]
      )
        willBeFiltred = true;

      if (array[index - 2] == oposites[direction]) willBeFiltred == false;
      return !willBeFiltred;
    });

    if (prevArr.length === filtredArr.length) finished = true;

    prevArr = filtredArr;
  }

  return prevArr;
}

dirReduc(["SOUTH", "WEST"]);

// function dirReduc(arr) {
//     var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
//     while (pattern.test(str)) str = str.replace(pattern,'');
//     return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
//   }

// function dirReduc(arr){
//     var count = 0;
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] === "WEST" && arr[i+1] === "EAST" ||
//           arr[i] === "EAST" && arr[i+1] === "WEST" ||
//           arr[i] === "NORTH" && arr[i+1] === "SOUTH" ||
//           arr[i] === "SOUTH" && arr[i+1] === "NORTH") {
//           arr.splice(i, 2);
//           count++;
//           i--;
//       }
//     }
//     return count === 0 ? arr : dirReduc(arr);
//   }

// function dirReduc(plan) {
//     var opposite = {
//       'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
//     return plan.reduce(function(dirs, dir){
//         if (dirs[dirs.length - 1] === opposite[dir])
//           dirs.pop();
//         else
//           dirs.push(dir);
//         return dirs;
//       }, []);
//   }
