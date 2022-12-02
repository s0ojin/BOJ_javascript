const N = +require('fs').readFileSync('/dev/stdin').toString();

const factorial = (num) => {
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
};

console.log(factorial(N));