const {
    GuiaTransferencia,
    GuiaDevolucao,
    GuiaAmostra
} = require("./GuiaRemessa")

function criar(tipo, produto) {
    switch (tipo) {
        case "transferencia":
            return new GuiaTransferencia(produto)

        case "devolucao":
            return new GuiaDevolucao(produto)

        case "amostra":
            return new GuiaAmostra(produto)

        default:
            throw new Error("Tipo de guia inválido")
    }
}

module.exports = {
    criar
}