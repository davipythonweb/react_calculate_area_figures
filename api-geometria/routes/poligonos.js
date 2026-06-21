const express = require("express");

const router = express.Router();

const {
    areaTriangulo,
    areaTrapezio
} = require("../services/calculos");

const {
    validarCampos
} = require("../utils/validacoes");


router.post("/triangulo", (req, res) => {

    const erro = validarCampos(
        req.body,
        ["base", "altura"]
    );

    if (erro) {
        return res.status(400).json({ erro });
    }

    const area = areaTriangulo(
        req.body.base,
        req.body.altura
    );

    return res.json({
        figura: "triangulo",
        area
    });
});


router.post("/trapezio", (req, res) => {

    const erro = validarCampos(
        req.body,
        ["base_maior", "base_menor", "altura"]
    );

    if (erro) {
        return res.status(400).json({ erro });
    }

    const area = areaTrapezio(
        req.body.base_maior,
        req.body.base_menor,
        req.body.altura
    );

    return res.json({
        figura: "trapezio",
        area
    });
});

module.exports = router;