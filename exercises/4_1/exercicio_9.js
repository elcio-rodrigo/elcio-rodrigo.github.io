function algumImpar(a, b, c) {
    if ((a % 2 !== 0) || (b % 2 !== 0) || ( c % 2 !== 0)) {
        temImpar = true;
    }
    else {
        temImpar = false;
    }
    return temImpar;
}
console.log(algumImpar(22, 12, 68));