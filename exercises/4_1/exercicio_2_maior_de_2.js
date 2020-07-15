function numeroMaior(a, b) {
    let maior = 0;
    if (a > b) {
        maior = a;
    } else {
        maior = b;
    }
    return maior;
}
console.log(numeroMaior(10, 5));