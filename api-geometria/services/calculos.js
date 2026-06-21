function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function areaTrapezio(baseMaior, baseMenor, altura) {
    return ((baseMaior + baseMenor) * altura) / 2;
}

function areaRetangulo(base, altura) {
    return base * altura;
}

function areaLosango(diagonalMaior, diagonalMenor) {
    return (diagonalMaior * diagonalMenor) / 2;
}

module.exports = {
    areaTriangulo,
    areaTrapezio,
    areaRetangulo,
    areaLosango
};