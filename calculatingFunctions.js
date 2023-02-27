function defineOper(oper, num) {
  switch (oper[1]) {
    case "+":
      return num + oper[0];
    case "-":
      return num - oper[0];
    case "*":
      return num * oper[0];
    case "/":
      return Math.floor(num / oper[0]);
  }
}

function zero(oper = null) {
  if (oper) return defineOper(oper, 0);
  else return 0;
}
function one(oper = null) {
  if (oper) return defineOper(oper, 1);
  else return 1;
}
function two(oper = null) {
  if (oper) return defineOper(oper, 2);
  else return 2;
}
function three(oper = null) {
  if (oper) return defineOper(oper, 3);
  else return 3;
}
function four(oper = null) {
  if (oper) return defineOper(oper, 4);
  else return 4;
}

function five(oper = null) {
  if (oper) return defineOper(oper, 5);
  else return 5;
}

function six(oper = null) {
  if (oper) return defineOper(oper, 6);
  else return 6;
}

function seven(oper = null) {
  if (oper) return defineOper(oper, 7);
  else return 7;
}
function eight(oper = null) {
  if (oper) return defineOper(oper, 8);
  else return 8;
}
function nine(oper = null) {
  if (oper) return defineOper(oper, 9);
  else return 9;
}

function plus(num) {
  return [num, "+"];
}

function minus(num) {
  return [num, "-"];
}

function times(num) {
  return [num, "*"];
}

function dividedBy(num) {
  return [num, "/"];
}

console.log(seven(times(five())));

// function zero(fn) {return fn ? fn(0) : 0}
// function one(fn) {return fn ? fn(1) : 1}
// function two(fn) {return fn ? fn(2) : 2}
// function three(fn) {return fn ? fn(3) : 3}
// function four(fn) {return fn ? fn(4) : 4}
// function five(fn) {return fn ? fn(5) : 5}
// function six(fn) {return fn ? fn(6) : 6}
// function seven(fn) {return fn ? fn(7) : 7}
// function eight(fn) {return fn ? fn(8) : 8}
// function nine(fn) {return fn ? fn(9) : 9}

// function plus(n) {return function(v) {return v + n}}
// function minus(n) {return function(v) {return v - n}}
// function times(n) {return function(v) {return v * n}}
// function dividedBy(n) {return function(v) {return v / n}}
//waaaaay better
