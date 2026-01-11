//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
//evento click que ejecute un console log con la información del evento del click

// Creamos un botón
let btnToClick = document.createElement("button");

// Le damos un id
btnToClick.id = "btnToClick";

// Le ponemos el texto visible
btnToClick.textContent = "Click me!";

// Lo añadimos al body del HTML
document.body.appendChild(btnToClick);

// Añadimos un evento click usando arrow function
btnToClick.addEventListener("click", (event) => {
    console.log(event); 
});


//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let focusInput = document.querySelector(".focus");

focusInput.addEventListener("focus", (event) => {
    console.log(event.target.value);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let valueInput = document.querySelector(".value");

valueInput.addEventListener("input", (event) => {
    console.log(event.target.value);
});