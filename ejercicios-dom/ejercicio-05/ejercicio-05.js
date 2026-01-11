//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
//que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Array de albums con más información
const albums2 = [
  {
    title: "De Mysteriis Dom Sathanas",
    artist: "Mayhem",
    cover: "https://picsum.photos/200/150?random=1"
  },
  {
    title: "Reign of Blood",
    artist: "Slayer",
    cover: "https://picsum.photos/200/150?random=2"
  },
  {
    title: "Ride the Lightning",
    artist: "Metallica",
    cover: "https://picsum.photos/200/150?random=3"
  },
  {
    title: "Painkiller",
    artist: "Judas Priest",
    cover: "https://picsum.photos/200/150?random=4"
  },
  {
    title: "Iron Fist",
    artist: "Motörhead",
    cover: "https://picsum.photos/200/150?random=5"
  },
];

//Añadimos la funcionalidad al boton del tema
document.querySelector("#themeBtn").addEventListener("click", (ev) => {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        ev.target.textContent = "☀️";
    }else{
        ev.target.textContent ="🌑";
    }
}
);

// Función para pintar los albums
const renderAlbums = () => {
    const container = document.querySelector("#container");
    for(const album of albums2){
        const li = document.createElement("li");
        
        // Crear elementos internos
        const img = document.createElement("img");
        img.src = album.cover;
        img.alt = album.title + " cover";

        const h2 = document.createElement("h2");
        h2.textContent = album.title;

        const p = document.createElement("p");
        p.textContent = "Artist: " + album.artist;

        // Añadir los elementos al li
        li.appendChild(img);
        li.appendChild(h2);
        li.appendChild(p);

        container.appendChild(li);
    }
};

// Llamamos a la función
renderAlbums();