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

    const weekDate = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});
    const dataBrasileira = new Date().toLocaleDateString('pt-BR');
    const hora = new Date().toLocaleTimeString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric'
    });

    const dataCompleta = `${weekDate} (${dataBrasileira} às ${hora})`
    const itemData = document.createElement('p');
    itemData.innerText = dataCompleta;
    itemData.classList.add('texto-data');


    containerItemLista.appendChild(inputItemLista);
    containerItemLista.appendChild(textoItem);
    itemLista.appendChild(containerItemLista);
    itemLista.appendChild(itemData);

    return itemLista;
}