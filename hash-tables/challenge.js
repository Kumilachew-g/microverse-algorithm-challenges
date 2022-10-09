function hashTable(arr) {
  // write your code here
  let hash = {};
  let result = [];
  arr.forEach((content) => {
    let key = Math.abs(content) % 11;
    if (hash[key] != undefined) {
      hash[key].push(content);
    } else {
      hash[key] = [content];
    }
  });
  for (e in hash) {
    result.push(...hash[e]);
  }
  return result;
}

console.log(hashTable([12, 24, 125, 5, 91, 1106, 2, 1021, 29, 3536, 10]));
// => [12, 24, 2, 91, 125, 5, 3536, 1106, 29, 1021, 10]

console.log(hashTable([2, 341, 73, 8265, 234004, 602, 7400000, 200000000]));
// => [341, 234004, 2, 200000000, 7400000, 8265, 73, 602]

module.exports = hashTable;
