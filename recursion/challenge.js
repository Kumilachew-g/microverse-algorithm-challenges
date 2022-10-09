module.exports = function sum(number) {
  // write your code here
  if (number > 0) {
    return number + sum(number - 1);
  } else {
    return number;
  }
  console.log(sum(4));
  console.log(sum(10));
};
