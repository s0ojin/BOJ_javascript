const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const password = input.shift().split("");
const N = +input.shift();
const dict = input;

const passwordNum = [];

for (let i = 0; i < password.length; i++) {
  passwordNum.push(password[i].charCodeAt() - 97);
}

outer: for (let i = 0; ; i++) {
  let decryption = "";

  for (let j = 0; j < passwordNum.length; j++) {
    if (passwordNum[j] + 97 + i > 122) {
      decryption += String.fromCharCode(passwordNum[j] + 97 + i - 26);
    } else decryption += String.fromCharCode(passwordNum[j] + 97 + i);
  }

  for (let k = 0; k < N; k++) {
    if (decryption.includes(dict[k])) {
      console.log(decryption);
      break outer;
    }
  }
}
