let pecaDeXadrez = "rainha";
switch (pecaDeXadrez) {
    case "peao":
        console.log("O peão move uma casa para frente");
        break;
    case "cavalo":
        console.log("O cavalo se move em L");
        break;
    case "bispo":
        console.log("O bispo se move em diagonal");
        break;
    case "torre":
        console.log("A torre se move uma ou mais casas para frente ou para o lado");
        break;
    case "rainha":
        console.log("A rainha se move em qualquer direção");
        break;
    case "rei":
        console.log("O rei se move uma casa em qualquer direção");
        break;
    default:
        console.log("Não é uma peça de xadrez");
        break;
}
