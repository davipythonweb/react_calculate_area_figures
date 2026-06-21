// API de cálculo de áreas de polígonos e paralelogramos

// Importando o framework Express para criar a API
const express = require("express");

// Criando uma instância do Express
const app = express();

// Importando as rotas para polígonos e paralelogramos
const poligonosRoutes = require("./routes/poligonos");
const paralelogramosRoutes = require("./routes/paralelogramos");

// Configurando o Express para interpretar requisições com corpo em formato JSON
app.use(express.json());

// Rota raiz para fornecer informações sobre a API
app.get("/", (req, res) => {

    // Respondendo com uma mensagem e os endpoints disponíveis na API
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

// Registrando as rotas para polígonos e paralelogramos na aplicação Express
app.use("/poligonos", poligonosRoutes);
app.use("/paralelogramos", paralelogramosRoutes);

// Iniciando o servidor na porta 5000 e exibindo uma mensagem no console quando o servidor estiver rodando
app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
});


