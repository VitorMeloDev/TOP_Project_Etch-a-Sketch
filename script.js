//fiz esse codigo, mas na tela não mostra corretamente, somente uma pequena tarja preta, imagino que o problema esteja na hora de passar o tamanho do item

const displayContainer = document.querySelector(".container");
let rows = 16;

function CreateElementsOnDisplay()
{
    for (let i = 0; i < rows*rows; i++) {
        const item = document.createElement('div');
        item.classList.add('flex-item');
        item.style.width = ItemSizeWidthHeight();
        item.style.height = ItemSizeWidthHeight();
    
        displayContainer.appendChild(item);
    }
}

function ItemSizeWidthHeight()
{
    const size = displayContainer.clientWidth / rows - 3;
    return `${size}px`;
}

CreateElementsOnDisplay();

console.log("Aqui");
console.log(itemSize);