let input = +require("fs").readFileSync("/dev/stdin").toString();

let count = 0;

for (let i = 1; ; i++) {
  if (input === 0) {
    break;
  }
  if (input < 0) {
    count--;
    break;
  }

  input -= i;
  count++;
}

console.log(count);