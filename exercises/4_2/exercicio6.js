let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
        console.log(numeros[i]);
    } else {
        console.log("nenhum valor ímpar foi encontrado.")
    }
}