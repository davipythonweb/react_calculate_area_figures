
// API de cálculo de áreas de paralelogramos
const express = require("express");

// Criando uma instância do Express para definir as rotas relacionadas aos paralelogramos
const router = express.Router();

// Importando as funções de cálculo de área para retângulo e losango, que são tipos de paralelogramos
const {
    areaRetangulo,
    areaLosango
} = require("../services/calculos");

// Importando a função de validação para verificar os campos de entrada das requisições
const {
    validarCampos
} = require("../utils/validacoes");


// Definindo a rota para calcular a área do retângulo, que é um tipo de paralelogramo
router.post("/retangulo", (req, res) => {

    // Validando os campos de entrada para garantir que o corpo da requisição contenha os campos 'base' e 'altura', que devem ser numéricos e maiores que zero
    const erro = validarCampos(
        req.body,
        ["base", "altura"]
    );

    // Se houver um erro na validação, respondemos com um status 400 e a mensagem de erro
    if (erro) {
        return res.status(400).json({ erro });
    }

    // Calculando a área do retângulo usando a função importada e os valores fornecidos no corpo da requisição
    const area = areaRetangulo(
        req.body.base,
        req.body.altura
    );

    // Respondendo com um JSON contendo o tipo de figura e a área calculada
    return res.json({
        figura: "retangulo",
        area
    });
});

// Definindo a rota para calcular a área do losango, que é outro tipo de paralelogramo
router.post("/losango", (req, res) => {

    // Validando os campos de entrada para garantir que o corpo da requisição contenha os campos 'diagonal_maior' e 'diagonal_menor', que devem ser numéricos e maiores que zero
    const erro = validarCampos(
        req.body,
        ["diagonal_maior", "diagonal_menor"]
    );

    // Se houver um erro na validação, respondemos com um status 400 e a mensagem de erro
    if (erro) {
        return res.status(400).json({ erro });
    }

    // Calculando a área do losango usando a função importada e os valores fornecidos no corpo da requisição
    const area = areaLosango(
        req.body.diagonal_maior,
        req.body.diagonal_menor
    );

        // Respondendo com um JSON contendo o tipo de figura e a área calculada
    return res.json({
        figura: "losango",
        area
    });
});

// Exportando o router para ser utilizado em outras partes da aplicação, como no arquivo app.js, onde as rotas são registradas na aplicação Express
module.exports = router;