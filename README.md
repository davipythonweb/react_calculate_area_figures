# react_calculate_area_figures

<!-- 
Primeiro, instale o NVM se ainda não o tiver:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash   

Em seguida, feche e reabra o terminal (ou execute source ~/.bashrc) e instale a versão específica:
nvm install 22.16.0   

Para definir essa versão como a padrão no seu ambiente:
nvm use 22.16.0
nvm alias default 22.16.0   

Verifique a instalação com node -v, que deve retornar v22.16.0.
 -->

# criar projeto vite

- npm create vite@latest geometria-react -- --template react

# com Express

Criar pasta do projeto:

mkdir api-geometria
cd api-geometria

Inicializar: npm init -y
Instalar dependências: npm install express
Dependência para reiniciar automaticamente: npm install -D nodemon


- usage:
<!-- 
Triângulo:

curl -X POST http://localhost:5000/poligonos/triangulo \
-H "Content-Type: application/json" \
-d '{"base":10,"altura":5}'

resposta:
{
  "figura": "triangulo",
  "area": 25
}

Retângulo:

curl -X POST http://localhost:5000/paralelogramos/retangulo \
-H "Content-Type: application/json" \
-d '{"base":10,"altura":5}'
 -->