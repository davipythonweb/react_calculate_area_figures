// Função para validar os campos de entrada dos cálculos de área
function validarCampos(dados, campos) {

    // Verificando se o corpo da requisição é um JSON válido
    if (!dados) {
        return "JSON inválido.";
    }

    // Iterando sobre os campos obrigatórios para verificar se estão presentes, são numéricos e maiores que zero
    for (const campo of campos) {

        // Verificando se o campo obrigatório está presente no corpo da requisição
        if (!(campo in dados)) {
            return `Campo obrigatório ausente: '${campo}'`;
        }

        // Verificando se o campo é numérico
        if (typeof dados[campo] !== "number") {
            return `Campo '${campo}' deve ser numérico.`;
        }

        // Verificando se o campo é maior que zero
        if (dados[campo] <= 0) {
            return `Campo '${campo}' deve ser maior que zero.`;
        }
    }

    return null;
}

// Exportando a função de validação para ser utilizada em outras partes da aplicação
module.exports = {
    validarCampos
};