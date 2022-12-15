const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const answer = [];

class Stack {
  constructor() {
    this.stack = [];
  }

  push(x) {
    this.stack.push(x);
  }

  pop() {
    const poped = this.stack.pop();
    if (poped === undefined) {
      answer.push(-1);
    } else {
      answer.push(poped);
    }
  }

  size() {
    answer.push(this.stack.length);
  }

  empty() {
    answer.push(this.stack.length === 0 ? 1 : 0);
  }

  top() {
    answer.push(
      this.stack.length === 0 ? -1 : this.stack[this.stack.length - 1]
    );
  }
}

const stackClass = new Stack();

input.shift();

input.forEach((command) => {
  if (command.includes("push")) {
    const [_, x] = command.split(" ");
    stackClass.push(+x);
  }
  if (command === "pop") {
    stackClass.pop();
  }
  if (command === "size") {
    stackClass.size();
  }
  if (command === "empty") {
    stackClass.empty();
  }
  if (command === "top") {
    stackClass.top();
  }
});

console.log(answer.join("\n"));