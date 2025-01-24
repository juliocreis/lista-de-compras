import { criarItemDaLista } from "./scripts/criarItemDaLista.js";

const adicionarItem = document.getElementById('adicionar-item');
const listaDeCompras = document.getElementById('lista-de-compras');

adicionarItem.addEventListener('click', (evento) => { // *
    evento.preventDefault();
    const itemLista = criarItemDaLista();
    listaDeCompras.appendChild(itemLista);

    verificarListaVazia();
});

const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia');

function verificarListaVazia() {
    const itensDaLista = document.querySelectorAll('li');
    if(itensDaLista.length === 0) {
        mensagemListaVazia.style.display = 'block';
    } else {
        mensagemListaVazia.style.display = 'none';
    }
}

verificarListaVazia();