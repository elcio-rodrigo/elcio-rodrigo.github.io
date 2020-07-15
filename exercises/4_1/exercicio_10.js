// 20% de imposto incidindo no custo
// lucro de mil produtos
function calculaLucro(custo, venda) {
    if (custo !== 0 && venda !== 0) {
        let lucro = (venda - custo) * 1000 * 0.20;
        return lucro;
    } else {
        return "Erro, os valores são nulos";
    }
}
console.log(calculaLucro(1, 3));