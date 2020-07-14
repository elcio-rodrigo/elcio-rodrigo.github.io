let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}
console.log(maior);