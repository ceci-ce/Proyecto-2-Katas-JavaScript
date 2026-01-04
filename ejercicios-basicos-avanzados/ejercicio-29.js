//Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

//Utiliza bucles para lograrlo e imprime el objeto final por consola.

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

const moviesByDecade = {};

for(const movie of starWarsMovies){
    //Calculamos la década
    let decade = Math.floor(movie.releaseYear / 10) * 10;
    //Comprobamos si la década ya existe en el objeto
    if(!moviesByDecade[decade]){
        //Si aún no existe, creamos un array vacío para empezar a guardar películas.
        moviesByDecade[decade] = [];
    }
    //Agregamos la película a la década
    moviesByDecade[decade].push(movie);
}

console.log(moviesByDecade);

