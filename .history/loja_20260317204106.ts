//---------------------------------------------------------------------------------------------------------
// Modelagem de Dados

type Categoria = 'Eletrônicos' | 'Livros' | 'Vestuário'


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

let carrinho : ItemCarrinho[] = []

//---------------------------------------------------------------------------------------------------------
// Regras de Negócio

function adicionarAoCarrinho (produto : Produto, quantidade : number = 1) : void {

    if (produto.estoque === 0) {
        console.log(`Produto ${produto.nome} fora de estoque!`)
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

    
    console.log(`${produto.nome} adicionado ao carrinho!`)
}

function calcularTotal (carrinho : ItemCarrinho[]) : number {
    
    let total = 0

    for (let item of carrinho) {
        let precoFinal = item.produto.preco

        if (item.produto.desconto !== undefined) {
            precoFinal -= item.produto.desconto
        }

        total += precoFinal * item.quantidade
    }

    return total
}

//---------------------------------------------------------------------------------------------------------
// Cenario A

const produto01 : Produto = {
    id : 1,
    nome : 'Monitor 4K',
    preco : 2000,
    categoria : 'Eletrônicos',
    estoque : 5
}

const produto02 : Produto = {
    id : 2,
    nome : 'Livro Clean Code',
    preco : 100,
    categoria : 'Livros',
    estoque : 10,
    desconto : 15
}

const produto03 : Produto = {
    id : 3,
    nome : 'Teclado Mecanico',
    preco : 500,
    categoria : 'Eletrônicos',
    estoque : 0
}

// const produto4: Produto = {
//     id: 4,
//     nome: "Comida",
//     preco: 50,
//     categoria: "Alimentos",
//     estoque: 10
// }

//---------------------------------------------------------------------------------------------------------
// Cenario B

adicionarAoCarrinho(produto01, 1)
adicionarAoCarrinho(produto02)
adicionarAoCarrinho(produto03)

//---------------------------------------------------------------------------------------------------------
// Cenario C

adicionarAoCarrinho(produto01, 2)
console.log('Total: ', calcularTotal(carrinho))

//---------------------------------------------------------------------------------------------------------
// Cenario D

function finalizarCompra() : string {   
    return `Total da compra: R$ ${calcularTotal(carrinho)}`
}

let resultadoFinal = finalizarCompra()
console.log(resultadoFinal)