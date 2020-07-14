let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
        impares += 1;
    }
}
if (impares === 0) {
    console.log("Nenhum valor ímpar foi encontrado.");
} else {
    console.log(impares);
}