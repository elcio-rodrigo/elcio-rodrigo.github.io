// pirâmide vazia no meio
let n = 7;
let linha = [];
let base = [];
let asterisco = '*';
let area = [];
let meio = (n + 1) / 2;
let esquerda = 1;
let direita = n - 2;

for (let i = 0; i < n; i++) {
    base[i] = asterisco;
}
area[0] = base;
for (let j = 1; j < n; j++) {
    for (let k = 0; k < n; k++) {
        if (k === esquerda || k === direita) {
            linha[k] = asterisco;
        } else {
            linha[k] = ' ';
        }
    }
    area[j] = linha;
    esquerda++;
    direita--;
    linha = [];
    if (esquerda > direita) break;
}
let piramide = '';
for (let i = area.length - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
        piramide = piramide + area[i][j];
    }
    console.log(piramide);
    piramide = '';
}