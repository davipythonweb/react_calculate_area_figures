const express = require("express");

const app = express();

const poligonosRoutes = require("./routes/poligonos");
const paralelogramosRoutes = require("./routes/paralelogramos");

app.use(express.json());

app.get("/", (req, res) => {

    res.json({
        mensagem: "API de cálculo de áreas",
        endpoints: [
            "/poligonos/triangulo",
            "/poligonos/trapezio",
            "/paralelogramos/retangulo",
            "/paralelogramos/losango"
        ]
    });
});

app.use("/poligonos", poligonosRoutes);
app.use("/paralelogramos", paralelogramosRoutes);

app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
});


