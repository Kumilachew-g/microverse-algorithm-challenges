function balancedBrackets(string) {
  // your code here
  let brackets = '[]{}()<>';
  let stack = [];

  for (let bracket of string) {
    let bracketsIndex = brackets.indexOf(bracket);

    if (bracketsIndex === -1) {
      continue;
    }

    if (bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1);
    } else {
      if (stack.length === 0 || stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(balancedBrackets('(hello)[world]'));
// => true

console.log(balancedBrackets('([)]'));
// => false

console.log(balancedBrackets('[({}{}{})([])]'));
// => true

module.exports = balancedBrackets;
