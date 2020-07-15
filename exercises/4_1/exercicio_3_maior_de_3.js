function maiorDe3Numeros(a, b, c) {
    let maior = 0;
    if ((a > b) && (a > c)) {
        return a;
    }
    else if ((b > a) && (b > c)) {
        return b;
    }
    else {
        return c;;
    }
}
console.log(maiorDe3Numeros(19, 25, 56));
