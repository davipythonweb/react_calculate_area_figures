const express = require("express");

const router = express.Router();

const {
    areaRetangulo,
    areaLosango
} = require("../services/calculos");

const {
    validarCampos
} = require("../utils/validacoes");


router.post("/retangulo", (req, res) => {

    const erro = validarCampos(
        req.body,
        ["base", "altura"]
    );

    if (erro) {
        return res.status(400).json({ erro });
    }

    const area = areaRetangulo(
        req.body.base,
        req.body.altura
    );

    return res.json({
        figura: "retangulo",
        area
    });
});


router.post("/losango", (req, res) => {

    const erro = validarCampos(
        req.body,
        ["diagonal_maior", "diagonal_menor"]
    );

    if (erro) {
        return res.status(400).json({ erro });
    }

    const area = areaLosango(
        req.body.diagonal_maior,
        req.body.diagonal_menor
    );

    return res.json({
        figura: "losango",
        area
    });
});

module.exports = router;