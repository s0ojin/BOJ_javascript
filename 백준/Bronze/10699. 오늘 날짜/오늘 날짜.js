const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

console.log(`${year}-${("00" + month).slice(-2)}-${("00" + date).slice(-2)}`);
