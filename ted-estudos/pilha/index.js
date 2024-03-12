import { criarPilha, inserirItem, retirarItem, procurarNaPilha, estaVazia } from "./pilha1.js";

const listaAlunos = [
    {
        nome: 'Dom Casmurro',
        id: 0,
    },
    {
        nome: 'A Metamorfose',
        id: 1,
    },
]

console.log(listaAlunos)

const pilha = criarPilha(3)


inserirItem(pilha, {
    nome: 'Alice',
    id: 3,
})

inserirItem(pilha, {
    nome: 'Do Mil ao Milhão',
    id: 4,
})
inserirItem(pilha, {
    nome: 'Como Fazer Amigos e Influenciar Pessoas',
    id: 5,
})


procurarNaPilha(pilha, {
    nome: 'A Metamorfose',
    id: 6,
})

if (estaVazia(pilha)) {
    console.log("A pilha está vazia.")
} else {
    console.log("A pilha não está vazia.")
}

console.log(pilha)
