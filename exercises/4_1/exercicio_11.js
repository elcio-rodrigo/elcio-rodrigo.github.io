// desconto de INSS e IR do salário Bruto
function salarioLiquido(bruto) {
    let inss;
    let ir;
    if (bruto <= 1556.94) {
        inss = bruto * 0.08;
    } else if (bruto <= 2594.92) {
        inss = bruto * 0.09;
    } else if (bruto <= 5189.82) {
        inss = bruto * 0.11;
    } else {
        inss = 570.88;
    }
      
    let brutoInss = bruto - inss;
      
    if (brutoInss <= 1903.98) {
        ir = 0;
    } else if (brutoInss <= 2826.65) {
        ir = brutoInss * 0.075 - 142.80;
    } else if (brutoInss <= 3751.05) {
        ir = brutoInss * 0.15 - 354.80;
    } else if (brutoInss <= 4664.68) {
        ir = brutoInss * 0.225 - 636.13;
    } else {
        ir = brutoInss * 0.275 - 869.36;
    }
    return "Salário Líquido: " + (brutoInss - ir);
}
console.log(salarioLiquido(3500));
