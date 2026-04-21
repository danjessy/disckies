// Récupérer l'id dans l'URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Trouver le bon vinyle
const vinyle = vinyles.find(v => v.id == id);

// Sécurité minimale
if (!vinyle) {
  document.body.innerHTML = "<h1>Vinyle introuvable</h1>";
}

// Affichage
document.getElementById("title").textContent = vinyle.title;
document.getElementById("cover").src = vinyle.cover;

document.getElementById("artist").textContent =
  "Artiste : " + (Array.isArray(vinyle.artist) ? vinyle.artist.join(", ") : vinyle.artist);

document.getElementById("year").textContent =
  "Année : " + vinyle.year;

document.getElementById("genre").textContent =
  "Genre : " + (Array.isArray(vinyle.genre) ? vinyle.genre.join(", ") : vinyle.genre);


const trackList = document.getElementById("tracks");

vinyle.tracks.forEach(track => {
  const li = document.createElement("li");
  li.textContent = `${track.title} (${track.duration})`;
  trackList.appendChild(li);
});


const gallery = document.getElementById("gallery");

if (vinyle.images) {
  vinyle.images.forEach(path => {
    const img = document.createElement("img");
    img.src = path;
    img.style.width = "350px";
    img.style.margin = "5px";

    gallery.appendChild(img);
  });
}
