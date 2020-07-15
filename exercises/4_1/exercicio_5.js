function ehTriangulo(a, b, c) {
    let triangulo = a + b + c;
    if (triangulo === 180) {
        return "true";
    }
    else {
        return "false - Não é um triângulo";
    }
}
console.log(ehTriangulo(110, 30, 40));