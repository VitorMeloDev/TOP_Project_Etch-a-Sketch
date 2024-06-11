const displayContainer = document.querySelector(".container");
const btnChangeDisplay = document.querySelector("#btnDisplay");
const inputDisplay = document.querySelector("#input-grid-size")

let rows = 16;
btnChangeDisplay.addEventListener('click', RecreateElements);

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

        displayContainer.appendChild(item);
    }
    console.log("Criados");

}

function ItemSizeWidthHeight()
{
    const size = displayContainer.clientWidth / rows - 2;
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

function RecreateElements(event){
    const value = parseInt(inputDisplay.value);
    
    if(value > 0 && value <= 100){
        rows = value;
        CreateElementsOnDisplay();
    }else{
        alert("Please choose a value between 1 and 100!")
    }
}

CreateElementsOnDisplay();

