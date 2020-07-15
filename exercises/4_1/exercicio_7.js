function qualNotaEh(porcentagem) {
    switch ((porcentagem >=0) && (porcentagem <=100)) {
        case (porcentagem >= 90):
            return "A";
            break;
        case (porcentagem >= 80):
            return "B";
            break;
        case (porcentagem >= 70):
            return "C";
            break;
        case (porcentagem >= 60):
            return "D";
            break;
        case (porcentagem >= 50):
            return "E";
            break;
        case (porcentagem < 50):
            return "F";
            break;
        default:
            return "A nota não é válida";
            break;
    }
}
console.log(qualNotaEh(63))