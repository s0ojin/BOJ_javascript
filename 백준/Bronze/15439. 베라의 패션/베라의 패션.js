const input = +require("fs").readFileSync("/dev/stdin").toString();

console.log(input * (input - 1));
