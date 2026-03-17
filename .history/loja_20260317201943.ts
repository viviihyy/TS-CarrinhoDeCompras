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

let carrinho : ItemCarrinho [] = []

function adicionarAoCarrinho (produto : Produto, quantidade : number = 1) : void {

    if (produto.estoque === 0) {
        console.log('Erro: produto sem estoque')
        return
    }

    if (quantidade > produto.estoque) {
        console.log('Erro: quantidade maior que o estoque')
        return
    }

    carrinho.push({
        produto : produto,
        quantidade : quantidade
    })

    console.log('Produto adicionado ao carrinho!')
}

function calcularTotal (carrinho : ItemCarrinho[]) : number {
    
    let total = 0

    for (let item of carrinho) {
        let precoFinal = item.produto.preco

        if (item.produto.desconto !== undefined) {
            precoFinal -= item.produto.desconto
        }

        total += precoFinal 
    }
}