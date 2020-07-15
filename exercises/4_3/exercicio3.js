// triângulo retângulo invertido
let n = 5;
let asterisco = '*';
let linha = '';
let posicao = n;

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n; j++) {
        if (j < posicao) {
            linha += ' ';
        } else {
            linha += asterisco;
        }
    }
    console.log(linha);
    linha = '';
    posicao--;
};

