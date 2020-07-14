let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novo = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i + 1]) {
        novo.push(numeros[i] * numeros[i + 1]);
    } else {
        novo.push(numeros[i] * 2);
    }
}
console.log(novo);