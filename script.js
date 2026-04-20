// Affichage des vinyles
const container = document.getElementById("container");

function displayVinyles(list) {
  container.innerHTML = "";

  list.forEach(v => {
    const card = document.createElement("a");
card.classList.add("card");
card.href = `vinyle.html?id=${v.id}`;

    card.innerHTML = `
  <img src="${v.cover}" alt="${v.title}">
  <h3>${v.title}</h3>
  <p>${Array.isArray(v.artist) ? v.artist.join(", ") : v.artist}</p>
  <p>${v.year}</p>
`;

    container.appendChild(card);
  });
}

displayVinyles(vinyles);

/*Barre de recherche
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = vinyles.filter(v =>
    v.title.toLowerCase().includes(value) ||
    v.artist.toLowerCase().includes(value)
  );

  displayVinyles(filtered);
});

//Tri
const sortSelect = document.getElementById("sort");

sortSelect.addEventListener("change", () => {
  const value = sortSelect.value;

  let sorted = [...vinyles];

  if (value === "title") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else if (value === "year") {
    sorted.sort((a, b) => a.year - b.year);
  }

  displayVinyles(sorted);
});*/
// desorder
document.querySelectorAll(".card").forEach(card => {
  const rotation = (Math.random() - 0.5) * 10;
  const translateX = (Math.random() - 0.5) * 20;
  const translateY = (Math.random() - 0.5) * 20;

  card.style.transform = `
    rotate(${rotation}deg)
    translate(${translateX}px, ${translateY}px)
  `;
});
