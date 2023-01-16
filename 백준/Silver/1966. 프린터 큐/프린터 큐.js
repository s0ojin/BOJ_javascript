const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

for (let i = 0; i < input.length; i += 2) {
  let [N, M] = input[i].split(" ").map(Number);
  const orderQueue = input[i + 1].split(" ").map(Number);
  let count = 0;

  while (true) {
    const max = Math.max(...orderQueue);

    if (orderQueue[0] === max) {
      orderQueue.shift();
      count++;
      if (M === 0) {
        console.log(count);
        break;
      } else {
        M -= 1;
      }
    } else if (orderQueue[0] !== max) {
      const removed = orderQueue.shift();
      orderQueue.push(removed);
      if (M === 0) {
        M = orderQueue.length - 1;
      } else {
        M -= 1;
      }
    }
  }
}