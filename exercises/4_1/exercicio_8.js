function algumPar(a, b, c) {
    let temPar;
    if ((a % 2 == 0) || (b % 2 == 0) || ( c % 2 == 0)) {
        temPar = true;
    }
    else {
        temPar = false;
    }
    return temPar;
}
console.log(algumPar(22, 11, 68));