class Stack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(number) {
    // your code here
    if (!this.stack.length) {
      this.stack.push(number);
      this.minStack.push(number);
    } else {
      this.stack.push(number);
      this.minStack.push(
        Math.min(this.minStack[this.minStack.length - 1], number)
      );
    }
  }

  pop() {
    // your code here
    if (!this.stack.length) return null;
    this.minStack.pop();
    return this.stack.pop();
  }

  min() {
    // your code here
    return this.minStack[this.minStack.length - 1];
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
console.log(stack.min());
// => 3

stack.pop();
stack.push(7);
console.log(stack.min());
// => 3

stack.push(2);
console.log(stack.min());
// => 2

stack.pop();
console.log(stack.min());
// => 3

module.exports = Stack;
