//Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

//Recuerda no usar frutas duplicadas.

//Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for(const food of foodSchedule){
  // Comprobamos si el alimento NO es vegano
  if(!food.isVegan){
    // Sustituimos el nombre del alimento no vegano
    // por una fruta del array fruits (sin repetir frutas)
    food.name = fruits.pop();
    food.isVegan = true;
  }
}

console.log(foodSchedule);