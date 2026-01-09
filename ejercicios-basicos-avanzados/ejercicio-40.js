//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
//Haz varios ejemplos y compruébalos.

function findArrayIndex(array, text) {
    //Tu codigo
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];


function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1; // si no se encuentra
}

console.log(findArrayIndex(mainCharacters, "Luke"));      
console.log(findArrayIndex(mainCharacters, "Rey"));       
console.log(findArrayIndex(mainCharacters, "Obi-Wan"));   
console.log(findArrayIndex(mainCharacters, "Yoda"));     

// 2. Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un 
// texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice 
// para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
// Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.
// Finalmente retorna el array.
// De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  if (index !== -1) {
    array.splice(index, 1);
  }

  return array;
}

// Ejemplo 1: eliminar "Han Solo"
console.log("Ejemplo 1:");
console.log(removeItem(mainCharacters, "Han Solo"));

// Ejemplo 2: eliminar "Luke"
console.log("Ejemplo 2:");
console.log(removeItem(mainCharacters, "Luke"));

