function qualMovimento(pecaDeXadrez) {
    switch (pecaDeXadrez.toLowerCase()) {
        case "peao":
            return "O peão move uma casa para frente";
            break;
        case "cavalo":
            return "O cavalo se move em L";
            break;
        case "bispo":
            return "O bispo se move em diagonal";
            break;
        case "torre":
            return "A torre se move uma ou mais casas para frente ou para o lado";
            break;
        case "rainha":
            return "A rainha se move em qualquer direção";
            break;
        case "rei":
            return "O rei se move uma casa em qualquer direção";
            break;
        default:
            return "Não é uma peça de xadrez";
            break;
    }
}
console.log(qualMovimento("CAVALO"));