function bouncingBall(h, bounce, window) {
  if (h < 0 || !(0 < bounce && bounce < 1) || window > h) return -1;

  let bounces = 0;

  while (h > window) {
    console.log(h);
    h *= bounce;
    bounces += 2;
  }

  // have to subratct 1 because in the first time it drops, it only pass once in front
  // of the window
  //the other times it will always pass 2 times
  return bounces - 1;
}

console.log(bouncingBall(30.0, 0.66, 1.5));
