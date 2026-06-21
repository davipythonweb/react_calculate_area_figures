
// Módulo de cálculos para áreas de figuras geométricas
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

// Exportando as funções de cálculo para serem utilizadas em outras partes da aplicação
module.exports = {
    areaTriangulo,
    areaTrapezio,
    areaRetangulo,
    areaLosango
};