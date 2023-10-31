let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const nucle = ["A", "C", "G", "T"];

input = input.map((string) => string.split(""));

let mainDNA = "";
let distance = 0;

for (let i = 0; i < M; i++) {
  //ACGT
  const freq = [0, 0, 0, 0];
  input.forEach((dna) => {
    if (dna[i] === "A") freq[0]++;
    if (dna[i] === "C") freq[1]++;
    if (dna[i] === "G") freq[2]++;
    if (dna[i] === "T") freq[3]++;
  });

  mainDNA += nucle[freq.indexOf(Math.max(...freq))];
  distance += N - Math.max(...freq);
}

console.log(mainDNA + "\n" + distance);
