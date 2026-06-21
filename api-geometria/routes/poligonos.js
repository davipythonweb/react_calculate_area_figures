
// API de cálculo de áreas de polígonos e paralelogramos

// Importando o framework Express para criar a API
const express = require("express");

// Criando uma instância do Express para definir as rotas relacionadas aos polígonos
const router = express.Router();

// Importando as funções de cálculo de área para triângulo e trapézio, que são tipos de polígonos
const {
    areaTriangulo,
    areaTrapezio
} = require("../services/calculos");

// Importando a função de validação para verificar os campos de entrada das requisições
const {
    validarCampos
} = require("../utils/validacoes");


// Definindo a rota para calcular a área do triângulo, que é um tipo de polígono
router.post("/triangulo", (req, res) => {

    // Validando os campos de entrada para garantir que o corpo da requisição contenha os campos 'base' e 'altura', que devem ser numéricos e maiores que zero
    const erro = validarCampos(
        req.body,
        ["base", "altura"]
    );

    // Se houver um erro na validação, respondemos com um status 400 e a mensagem de erro
    if (erro) {
        return res.status(400).json({ erro });
    }

    // Calculando a área do triângulo usando a função importada e os valores fornecidos no corpo da requisição
    const area = areaTriangulo(
        req.body.base,
        req.body.altura
    );

    // Respondendo com um JSON contendo o tipo de figura e a área calculada
    return res.json({
        figura: "triangulo",
        area
    });
});


// Definindo a rota para calcular a área do trapézio, que é outro tipo de polígono
router.post("/trapezio", (req, res) => {

    // Validando os campos de entrada para garantir que o corpo da requisição contenha os campos 'base_maior', 'base_menor' e 'altura', que devem ser numéricos e maiores que zero
    const erro = validarCampos(
        req.body,
        ["base_maior", "base_menor", "altura"]
    );

    // Se houver um erro na validação, respondemos com um status 400 e a mensagem de erro
    if (erro) {
        return res.status(400).json({ erro });
    }

    // Calculando a área do trapézio usando a função importada e os valores fornecidos no corpo da requisição
    const area = areaTrapezio(
        req.body.base_maior,
        req.body.base_menor,
        req.body.altura
    );

    // Respondendo com um JSON contendo o tipo de figura e a área calculada
    return res.json({
        figura: "trapezio",
        area
    });
});

// Exportando o router para ser utilizado em outras partes da aplicação
module.exports = router;