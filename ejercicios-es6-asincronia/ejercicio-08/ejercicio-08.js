// Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página, algo así:
// Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

// URL de la documentación (para que indaguéis): https://thronesapi.com/

// Esta sería la URL final (la que deberéis utilizar para vuestra petición):

// https://thronesapi.com/api/v2/Characters

// URL de la API con todos los personajes
const API_URL = 'https://thronesapi.com/api/v2/Characters';

// Seleccionamos elementos del DOM
const select = document.getElementById('character-list');
const image = document.querySelector('.character-image');

// Variable donde guardaremos los personajes
let characters = [];

// Pedimos los datos a la API
fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    characters = data;
    fillSelect(characters);
  })
  .catch(error => console.error('Error:', error));

// Función para rellenar el select
function fillSelect(characters) {
  characters.forEach(character => {
    const option = document.createElement('option');
    option.value = character.id;     // Guardamos el id
    option.textContent = character.fullName; // Mostramos el nombre
    select.appendChild(option);
  });
}

// Escuchamos cuando el usuario cambia el select
select.addEventListener('change', () => {
  const selectedId = select.value;

  // Buscamos el personaje seleccionado
  const selectedCharacter = characters.find(
    character => character.id == selectedId
  );

  // Mostramos su imagen
  image.src = selectedCharacter.imageUrl;
  image.alt = selectedCharacter.fullName;
});
