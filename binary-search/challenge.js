module.exports = function sqrt(number) {
  return sqrt_recursive(number, 0, number);
};

function sqrt_recursive(number, min_interval, max_interval) {
  // write your code here
  const midNum = (min_interval + max_interval) / 2;
  const midNumSquared = midNum * midNum;
  if (midNumSquared === number) {
    return midNum;
  } else if (midNumSquared < number) {
    return sqrt_recursive(number, midNum, max_interval);
  } else if (midNumSquared > number) {
    return sqrt_recursive(number, min_interval, midNum);
  }
}

//console.log(sqrt(25))
//console.log(sqrt(7056))
