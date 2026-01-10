//2.1 Inserta dinamicamente en un html un div vacio con javascript.

let newDiv = document.createElement("div");
document.body.appendChild(newDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let containerDiv = document.createElement("div");
let paragraph = document.createElement("p");

containerDiv.appendChild(paragraph);
document.body.appendChild(containerDiv);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let divWithParagraphs = document.createElement("div");

for(let i = 0; i < 6; i++){
    let pItem = document.createElement("p");
    divWithParagraphs.appendChild(pItem);
};

document.body.appendChild(divWithParagraphs);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let pWithText = document.createElement("p");

pWithText.textContent = 'Soy dinámico!';

document.body.appendChild(pWithText);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// Seleccionamos el h2 que tiene la clase .fn-insert-here
let heading = document.querySelector(".fn-insert-here");

// Cambiamos el texto del h2 por "Wubba Lubba dub dub"
heading.textContent = "Wubba Lubba dub dub";

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// Creamos un elemento <ul> que será el contenedor de los <li>
let appsList = document.createElement("ul");

// Recorremos el array con un bucle
for (let i = 0; i < apps.length; i++) {
    // Creamos un <li> por cada elemento del array
    let listItem = document.createElement("li");

    // Asignamos el texto del <li con el valor actual del array
    listItem.textContent = apps[i];

    // Añadimos el <li> al <ul>
    appsList.appendChild(listItem);
}

// Añadimos el <ul> completo al body del HTML
document.body.appendChild(appsList);


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// Seleccionamos todos los elementos que tienen la clase .fn-remove-me
let elementsToRemove = document.querySelectorAll(".fn-remove-me");

// Recorremos todos los elementos seleccionados
for (let element of elementsToRemove) {
    // Eliminamos cada elemento del DOM
    element.remove();
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

// Creamos el párrafo que queremos insertar
let middleParagraph = document.createElement("p");

// Le ponemos el texto
middleParagraph.textContent = "Voy en medio!";

// Seleccionamos el primer div
let firstDiv = document.querySelector("div");

// Insertamos el párrafo después del primer div (quedando entre los dos divs)
firstDiv.after(middleParagraph);


//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

// Seleccionamos todos los div que tienen la clase .fn-insert-here
let targetDivs = document.querySelectorAll(".fn-insert-here");

// Recorremos todos los divs seleccionados
for (let i = 0; i < targetDivs.length; i++) {
    // Creamos un nuevo párrafo
    let innerParagraph = document.createElement("p");
    
    // Le asignamos el texto
    innerParagraph.textContent = "Voy dentro!";
    
    // Lo insertamos dentro del div actual
    targetDivs[i].appendChild(innerParagraph);
}


