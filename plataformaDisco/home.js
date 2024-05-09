const favoriteRecords = ["disco1", "dosco2"];

function addFavorites(favorites) {
  const imgs = document.querySelectorAll("img");

  imgs.forEach((img) => {
    if (favorites.includes(img.getAttribute("name"))) {
      const icon = document.createElement("i");
      icon.classList.add("fa-regular");
      icon.classList.add("fa-star");

      icon.style.position = "absolute";
      icon.style.top = "10px";
      icon.style.left = "10px";

      img.parentNode.style.position = "relative";

      img.parentNode.appendChild(icon);
      img.parentElement.classList.add("favorite");

      img.parentNode.appendChild(icon);
      img.parentElement.classList.add("favorite");
    }
  });
}

addFavorites(favoriteRecords);

let icons = document.querySelectorAll("i");

icons.forEach((i) => {
  i.addEventListener("click", function (e) {
    e.preventDefault();
    i.classList.toggle("fa-solid");
  });
});