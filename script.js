const displayContainer = document.querySelector(".container");
const btnChangeDisplay = document.querySelector("#btnDisplay");
const inputDisplay = document.querySelector("#input-grid-size")
// essa função está causando problema. Com numeros pequenos ele funciona bem, mas se o numero de rows for 100, ele demora muito e até trava

let rows = 16;
let size = 60;
btnChangeDisplay.addEventListener('click', RecreateElements);

function CreateElementsOnDisplay()
{
    ClearDisplay();

    for (let i = 0; i < rows*rows; i++) {
        const item = document.createElement('div');
        item.classList.add('flex-item');
        item.style.width = `${size}px`;
        item.style.height = `${size}px`;
        item.addEventListener('mouseenter', ItemColorChange);
        displayContainer.appendChild(item);
        console.log(i);
    }
}

function ItemSizeWidthHeight()
{
    size = (displayContainer.clientWidth / rows);
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
    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function RecreateElements(event){
    const value = parseInt(inputDisplay.value);
    
    if(value > 0 && value <= 100){
        rows = value;
        ItemSizeWidthHeight();
        CreateElementsOnDisplay();
    }else{
        alert("Please choose a value between 1 and 100!")
    }
}

CreateElementsOnDisplay();

