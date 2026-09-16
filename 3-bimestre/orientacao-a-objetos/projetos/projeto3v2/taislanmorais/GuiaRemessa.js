class GuiaRemessa {
    constructor(produto) {
        this.produto = produto
    }

    emitir() {
        throw new Error("")
    }
}

class GuiaTransferencia extends GuiaRemessa {
    emitir() 
    {
        return `Guia de transferência emitida para: ${this.produto}`
    }
}

class GuiaDevolucao extends GuiaRemessa {
    emitir() {
        return `Guia de devolução emitida para: ${this.produto}`
    }
}

class GuiaAmostra extends GuiaRemessa {
    emitir() {
        return `Guia de amostra emitida para: ${this.produto}`
    }
}

module.exports = {
    GuiaRemessa,
    GuiaTransferencia,
    GuiaDevolucao,
    GuiaAmostra,
}