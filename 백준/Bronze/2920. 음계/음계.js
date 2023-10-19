const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const asc = [...input].sort((a, b) => a - b);
const desc = [...input].sort((a, b) => b - a);

if (String(input) === String(asc)) {
  console.log("ascending");
} else if (String(input) === String(desc)) {
  console.log("descending");
} else {
  console.log("mixed");
}
