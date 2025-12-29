//Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings 
//tenga la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

// for clasico
/*function findLongestWord(stringList){
  let palabraMasLarga = stringList[0];

  for(let i = 1;i < stringList.length;i++){
    if(stringList[i].length > palabraMasLarga.length){
        palabraMasLarga = stringList[i];
    }
}
    return palabraMasLarga;
}


console.log(findLongestWord(avengers));*/

//for of

function findLongestWord(stringList){
    let palabraMasLarga = "";

    for(const string of stringList){
        if(string.length > palabraMasLarga.length){
            palabraMasLarga = string;
        }
    }
     return palabraMasLarga;
}

console.log(findLongestWord(avengers));