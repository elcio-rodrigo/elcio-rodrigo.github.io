let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qtdNumeros = numeros.length;
let soma = 0;
for (let i = 0; i < numeros.length; i ++) {
    soma += numeros[i];
}
let media = soma / qtdNumeros;
if (media > 20) {
    console.log("Valor maior que 20.");
} else {
    console.log("Valor menor ou igual a 20.")
}