module.exports = function (num) {
  let f1 = 1;
  let f2 = 1;
  let fSum = f1;
  while (f2 <= num) {
    if (f2 % 2 !== 0) {
      fSum += f2;
    }
    let temp = f2;
    f2 = f1 + f2;
    f1 = temp;
  }
  return fSum;
};
