// Optionally: start with your code from LinkedList challenge.

// Start with your code from last challenge.
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(number) {
    // your code here
    let node = new Node(number);
    let newHead;
    if (this.head == null) {
      this.head = node;
    } else {
      newHead = this.head;
      while (newHead.next_node) {
        newHead = newHead.next_node;
      }
      newHead.next_node = node;
    }
    this.size++;
  }

  get(index) {
    // your code here
    let counter = 0;
    let node = this.head;
    while (node && counter != index && counter < this.size) {
      counter++;
      node = node.next_node;
    }
    return node.value;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node && counter != index && counter < this.size) {
      counter++;
      node = node.next_node;
    }
    return node;
  }

  addAt(index, item) {
    let node = new Node(item);
    let previous;
    if (index == 0) {
      node.next_node = this.head;
      this.head = node;
    } else {
      previous = this.getAt(index - 1);
      node.next_node = previous.next_node;
      previous.next_node = node;
    }
    this.size++;
  }

  remove(index) {
    let current, prev;
    current = this.head;
    if (index === 0) {
      this.head = current.next_node;
    } else {
      current = this.getAt(index);
      prev = this.getAt(index - 1);
      prev.next_node = current.next_node;
    }
    this.size--;
  }
}

class Stack {
  push(number) {
    // your code here

    let node = new Node(number);
    node.nextNode = this.head;
    this.head = node;
  }

  pop() {
    // your code here
    let node = this.head;
    this.head = this.head.nextNode;
    return node.value;
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
console.log(stack.pop());
// => 5

stack.push(2);
stack.push(7);
console.log(stack.pop());
// => 7

console.log(stack.pop());
// => 2

console.log(stack.pop());
// => 3

module.exports = Stack;
