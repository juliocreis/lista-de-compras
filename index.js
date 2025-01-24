import { criarItemDaLista } from "./scripts/criarItemDaLista.js";

const adicionarItem = document.getElementById('adicionar-item');
const listaDeCompras = document.getElementById('lista-de-compras');

adicionarItem.addEventListener('click', (evento) => { // *
    evento.preventDefault();
    const itemLista = criarItemDaLista();
    listaDeCompras.appendChild(itemLista);
})