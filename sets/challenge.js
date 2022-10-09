function findDuplicates(array) {
  // write your code here
  let sets = {};
  let Output = [];
  array.forEach((element) => {
    if (sets[element] === undefined) {
      sets[element] = 0;
    } else {
      Output.push(element);
    }
  });
  return Output;
}

console.log(findDuplicates([1, 2, 3, 1, 5, 6, 7, 8, 5, 2]));
// => [1, 5, 2]

console.log(
  findDuplicates([
    3, 501, 17, 23, -43, 67, 5, 888, -402, 235, 77, 99, 311, 1, -43,
  ])
);
// => [-43]

module.exports = findDuplicates;
