//fiz esse codigo, mas na tela não mostra corretamente, somente uma pequena tarja preta, imagino que o problema esteja na hora de passar o tamanho do item

const displayContainer = document.querySelector(".container");
let rows = 3;
const itemSize = displayContainer.clientWidth / (rows * rows);

function CreateElementsOnDisplay()
{
    for (let i = 0; i < rows*rows; i++) {
        const item = document.createElement('div');
        item.classList.add('flex-item');
        item.style.width = '318px';
        item.style.height = '318px';
    
        displayContainer.appendChild(item);
    }
}

CreateElementsOnDisplay();

console.log("Aqui");
console.log(itemSize);