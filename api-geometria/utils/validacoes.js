function validarCampos(dados, campos) {

    if (!dados) {
        return "JSON inválido.";
    }

    for (const campo of campos) {

        if (!(campo in dados)) {
            return `Campo obrigatório ausente: '${campo}'`;
        }

        if (typeof dados[campo] !== "number") {
            return `Campo '${campo}' deve ser numérico.`;
        }

        if (dados[campo] <= 0) {
            return `Campo '${campo}' deve ser maior que zero.`;
        }
    }

    return null;
}

module.exports = {
    validarCampos
};