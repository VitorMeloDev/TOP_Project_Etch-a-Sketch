const displayContainer = document.querySelector(".container");
let rows = 16;

function CreateElementsOnDisplay()
{
    ClearDisplay();

    for (let i = 0; i < rows*rows; i++) {
        const item = document.createElement('div');
        item.classList.add('flex-item');
        item.style.width = ItemSizeWidthHeight();
        item.style.height = ItemSizeWidthHeight();
        item.style.backgroundColor = 'rgb(255,255,255)'
        item.addEventListener('mouseenter', ItemColorChange);
        item.addEventListener('click', CreateElementsOnDisplay);

        displayContainer.appendChild(item);
    }
    console.log("Criados");

}

function ItemSizeWidthHeight()
{
    const size = displayContainer.clientWidth / rows - 3;
    return `${size}px`;
}

function ClearDisplay()
{
    while(displayContainer.firstChild){
        displayContainer.removeChild(displayContainer.firstChild);
    }
    console.log("Display limpo");
}

//Estou tentando colocar um novo valor na cor, mas não consigo. O debug aparece no browser

function ItemColorChange(event)
{   
    const r = Math.floor(Math.random() * (255 - 0)) + 0;
    const g = Math.floor(Math.random() * (255 - 0)) + 0;
    const b = Math.floor(Math.random() * (255 - 0)) + 0;

    console.log(`rgb(${r},${g},${b})`);

    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

CreateElementsOnDisplay();

