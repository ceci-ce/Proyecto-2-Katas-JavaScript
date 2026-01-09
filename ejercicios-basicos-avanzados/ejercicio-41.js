//Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de 
// la función.

//Que la función use el parametro para simular una tirada de dado y retornar el resultado.
//Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()

function rollDice(faces) {
  // Math.random() genera un número entre 0 (incluido) y 1 (excluido)
  // Lo multiplicamos por el número de caras
  // Math.floor redondea hacia abajo
  // Sumamos 1 para que el resultado vaya de 1 a faces
  return Math.floor(Math.random() * faces) + 1;
}

console.log(rollDice(6));   
console.log(rollDice(20)); 
console.log(rollDice(100));