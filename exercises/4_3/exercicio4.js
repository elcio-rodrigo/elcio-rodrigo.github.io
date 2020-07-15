// pirâmide
let n = 5;
let asterisco = "*";
let linha = "";
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let i = 0; i <= meio; i++) {
    for (let j = 1; j <= n; j++) {
        if (j > direita && j < esquerda) {
            linha += asterisco;
        } else {
            linha += " ";
        }
    }
    console.log(linha);
    linha = "";
    direita--;
    esquerda++;
}