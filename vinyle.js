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


const mainImage = document.getElementById("mainImage");
const gallery = document.getElementById("gallery");

const allImages = [vinyle.cover, ...(vinyle.images || [])];

// image principale
mainImage.src = vinyle.cover;

// miniatures
allImages.forEach(path => {
  const img = document.createElement("img");
  img.src = path;
  img.style.width = "80px";
  img.style.height = "80px";
  img.style.cursor = "pointer";

  img.addEventListener("click", () => {
    mainImage.src = path;
  });

  gallery.appendChild(img);
});
