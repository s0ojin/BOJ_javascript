const input = require("fs").readFileSync("/dev/stdin").toString();

let money = 1000 - Number(input);

let count = 0;

while (money > 0) {
  if (money / 500 >= 1) {
    count += Math.floor(money / 500);
    money = money % 500;
  }
  if (money / 100 >= 1) {
    count += Math.floor(money / 100);
    money = money % 100;
  }
  if (money / 50 >= 1) {
    count += Math.floor(money / 50);
    money = money % 50;
  }
  if (money / 10 >= 1) {
    count += Math.floor(money / 10);
    money = money % 10;
  }
  if (money / 5 >= 1) {
    count += Math.floor(money / 5);
    money = money % 5;
  }
  if (money / 1 >= 1) {
    count += Math.floor(money / 1);
    money = money % 1;
  }
}

console.log(count);
