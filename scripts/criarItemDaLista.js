import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById('input-item');
let contador = 0;

export function criarItemDaLista() {
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

    inputItemLista.addEventListener('click', function(){
        if(inputItemLista.checked) {
            textoItem.style.textDecoration = 'line-through';
        } else {
            textoItem.style.textDecoration = 'none';
        }
    });

    const itemData = document.createElement('p');
    itemData.innerText = gerarDiaDaSemana();
    itemData.classList.add('texto-data');


    containerItemLista.appendChild(inputItemLista);
    containerItemLista.appendChild(textoItem);
    itemLista.appendChild(containerItemLista);
    itemLista.appendChild(itemData);

    return itemLista;
}