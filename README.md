# 🛒 Carrinho de Compras

Atividade desenvolvida para praticar os fundamentos de **TypeScript**, simulando um mini sistema de e-commerce com modelagem de dados, regras de negócio e cenários de teste.

---

## 🧠 Conceitos praticados

| Conceito | Onde aparece |
|---|---|
| `type` e `interface` | `Categoria`, `Produto`, `ItemCarrinho` |
| Propriedades opcionais `?` | Campo `desconto` em `Produto` |
| Funções tipadas | `adicionarAoCarrinho`, `calcularTotal`, `finalizarCompra` |
| Arrays tipados | `carrinho: ItemCarrinho[]` |
| Verificação de `undefined` | Aplicação do desconto no cálculo |
| Parâmetros com valor padrão | `quantidade: number = 1` |

---

## ▶️ Como rodar

**1. Compilar com as configurações do projeto:**
```bash
npx tsc
```

**2. Executar o JavaScript gerado:**
```bash
node loja.js
```

> Requer **Node.js** instalado.

---

## 💡 Exemplo de saída

```
=== OPERAÇÕES NO CARRINHO ===
Monitor 4K adicionado ao carrinho!
Livro Clean Code adicionado ao carrinho!
Produto Teclado Mecanico fora de estoque!

=== CÁLCULO DO TOTAL ===
Monitor 4K adicionado ao carrinho!
Total da compra: R$ 6085

=== FINALIZAÇÃO ===
Total final: R$ 6085
```
