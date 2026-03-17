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
    let pr
}