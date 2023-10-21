const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const deque = [];

const answer = [];

input.forEach((string) => {
  const [command, X] = string.split(" ");

  if (command === "push_front") {
    deque.unshift(Number(X));
  }

  if (command === "push_back") {
    deque.push(Number(X));
  }

  if (command === "pop_front") {
    if (deque.length !== 0) {
      answer.push(deque.shift());
    } else {
      answer.push(-1);
    }
  }

  if (command === "pop_back") {
    if (deque.length !== 0) {
      answer.push(deque.pop());
    } else {
      answer.push(-1);
    }
  }

  if (command === "size") {
    answer.push(deque.length);
  }

  if (command === "empty") {
    answer.push(deque.length === 0 ? 1 : 0);
  }

  if (command === "front") {
    answer.push(deque.length !== 0 ? deque[0] : -1);
  }

  if (command === "back") {
    answer.push(deque.length !== 0 ? deque[deque.length - 1] : -1);
  }
});

console.log(answer.join("\n"));
