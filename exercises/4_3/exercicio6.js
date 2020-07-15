// numero primo
let numero = 16;
let divisor = 0;
for (let i = 2; i < numero && divisor !== 1; i++) {
    if (numero % i == 0) {
        divisor++;
    }
}
if (divisor === 0) {
    console.log(numero + " é primo");
} else {
    console.log(numero + " não é primo")
}