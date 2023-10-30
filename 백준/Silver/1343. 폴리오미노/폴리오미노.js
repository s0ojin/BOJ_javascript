let input = require("fs").readFileSync("/dev/stdin").toString();

input = input.replace(/XXXX/g, "AAAA");
input = input.replace(/XX/g, "BB");

if (input.includes("X")) {
  console.log(-1);
} else {
  console.log(input);
}
