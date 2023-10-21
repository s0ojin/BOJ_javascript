const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.pop();

input.forEach((numStr) => {
  if (numStr.split("").reverse().join("") === numStr) {
    console.log("yes");
  } else {
    console.log("no");
  }
});
