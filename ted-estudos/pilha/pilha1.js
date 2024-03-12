/* criarPilha(tamanho): array
inserirItem(pilha, item): void
retirarItem(pilha): void
procurarNaPilha(pilha, item): Object
estaVazia(pilha): boolean*/


//Criando a pilha como um item
export function criarPilha(tamanhoDaPilha = 10) {
    return[...new Array(tamanhoDaPilha)]
}

//inserindo itens..
export function inserirItem (pilha, item) {
    const spacePosition = pilha.indexOf(undefined)
    if(spacePosition === -1){
        console.log("Não tem mais espaço para mais um livro ")
        return
    }
    //caso tenha espaço, adiciona mais um item no lugar do 1o undefined
    //caso não tenha mais espaço, aumenta o tamanho da pilha
    pilha[spacePosition] = item
}

//Excluindo um item...
export function retirarItem(pilha){
    if(pilha[0] === undefined){ //Verifica se tem algo na lista, se for igual undefined quer dizer q n tem
        console.log("Biblioteca de livros vazia")
        return
    }

    const lastItemPosition = pilha.indexOf(undefined) //Acha o ultimo undefined
    const selectedItem = livro[lastItemPosition - 1] // acha o item anterior do undefined
    if(lastItemPosition === -1){
        pilha.pop() //retira o  ultimo item 
        return
    }

    pilha.splice(lastItemPosition - 1, 1, undefined) //Seleciona o item anterior ao primeiro undefined
    return selectedItem
}

//Ver se tem na pilha
export function procurarNaPilha(pilha, item){
    for(let i = 0; i < pilha.length; i++){
        if (pilha[i] === item) {
               console.log ("Achei o livro " + item.nome)
               return
        }
        console.log("Não achei o livro: " + item.id)
    }
    
}

//Verificando se está vazia
export function estaVazia(pilha) {
    if (pilha[0] === undefined) {
        console.log("Está vazia")
        return true
    }
    return false
}

export function estaCheia(pilha){
    if(pilha[(pilha.length -  1)] !== undefined) {
        return true
    }

    return false
}