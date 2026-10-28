
function criarMenu(){
    print("1 - Listar Todos\n2 - Inserir no final\n3 - Inserir na posição\n");
}

function criarNo(dado){
    return { dado : dado, proximo: null};
}

function criarLista(){
    return {inicio : null};
}

function listarTodos(lista){
    let atual = lista.inicio;
    while(atual != null){
        print(atual.dado);
        atual = atual.proximo;
    }
}

function inserirFim(lista,dado){
    novo = criarNo(dado);
    let atual = lista.inicio;
    if(lista.inicio == null){
        lista.inicio = novo;
        return;
    }
    while(atual != null){
        atual = atual.proximo;
    }
    atual.proximo = novo;
}

function inserirPosicao(lista,dado, posicao){
    if(posicao == 0){
        return;
    }
    let atual = lista.inicio;
    for(i = 0; i < posicao - 1 && atual != null; i++){
        atual = atual.proximo;
    }
    if (atual == null){
        return;
    }
    novo = criarNo(dado);
    novo.proximo = atual.proximo;
    atual.proximo = novo;
}

opc = 0;
novoDado = "";

lista = criarLista();

while(opc != 9){
    criarMenu();
    ofc = number(prompt("Escolha uma opção: \n"));
    
    switch (opc){
        case 1:
            listarTodos(lista);
            break;
        case 2:
            novoDado = prompt("Insira o Dado a se inserir: \n");
            inserirFim(lista,novoDado);
            break;
        case 3:
            novoDado = prompt("Insira o Dado a se inserir: \n");
            inserirPosicao(lista,novoDado);
            break;
        case 9:
            print("Saindo do Programa...");
            break;
        default:
            print("Opção Invalida\n");
            break;
    }
}

