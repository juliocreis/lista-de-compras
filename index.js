const adicionarItem = document.getElementById('adicionar-item');
const inputItem = document.getElementById('input-item');
const listaDeCompras = document.getElementById('lista-de-compras');

let contador = 0;

adicionarItem.addEventListener('click', (evento) => { // *
    evento.preventDefault();
    if(inputItem.value === '') {
        alert('Por favor, insira um item!');
        return;
    }

    const itemLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('lista-item-container');
    const inputItemLista = document.createElement('input');
    inputItemLista.type = 'checkbox';
    inputItemLista.id = 'checkbox-' + contador++;
    const textoItem = document.createElement('p');
    textoItem.innerText = inputItem.value;

    containerItemLista.appendChild(inputItemLista);
    containerItemLista.appendChild(textoItem);
    itemLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemLista);
})