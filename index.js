import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const adicionarItem = document.getElementById('adicionar-item');
const listaDeCompras = document.getElementById('lista-de-compras');

adicionarItem.addEventListener('click', (evento) => { // *
    evento.preventDefault();
    const itemLista = criarItemDaLista();
    listaDeCompras.appendChild(itemLista);

    verificarListaVazia(listaDeCompras);
});

verificarListaVazia(listaDeCompras);