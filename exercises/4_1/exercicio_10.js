let custo = 250;
let venda = 650;
if (custo !== 0 && venda !== 0) {
    let lucro = (venda - custo) * 1000 * 0.20;
    console.log(lucro);
} else {
    console.log("Erro, os valores são nulos")
}