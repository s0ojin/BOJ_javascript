const input = +require("fs").readFileSync("/dev/stdin").toString()


let count = 0;

if ((input % 5) % 2 === 0) {
  count += parseInt(input / 5);
  count += parseInt((input % 5) / 2);
} else if ((input % 5) % 2 === 1 && input > 5) {
  count += parseInt(input / 5) - 1;
  count += parseInt(((input % 5) + 5) / 2);
} else {
  count = -1;
}

console.log(count);
