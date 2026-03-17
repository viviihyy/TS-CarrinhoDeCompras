enum Categoria {
    Eletronicos = 'ELETRONICOS',
    Livros = 'LIVROS',
    VESTUARIO = 'VESTUARIO'
}

interface Produto {
    id : number
    nome : string
    preco : number
    categoria : Categoria
    estoque : number
    desconto ?: number
}

interface ItemCarrinho {
    produto : Produto
    quantidade : number
}

function adicionarAoCarrinho (produto : Produto, quantidade : number = 1) : void {

    if (produto.estoque === 0) {
        console.log('Erro: produto sem estoque')
        return
    }

    if 
}