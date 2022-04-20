const tagTemplate = (tagLabel, tag) => {
  // Création de l'icone close
  const closeTagLabel = document.createElement("div");
  closeTagLabel.setAttribute("alt", "close icon");
  closeTagLabel.setAttribute("src", "../img/close.svg");
  closeTagLabel.classList.add("CloseTag");

  // Ajout des class aux tags et des boutons "closeTagLabel"
  tag.classList.add(tagLabel);
  tag.appendChild(closeTagLabel);
  tag.addEventListener("click", (event) => {
    event.target.parentElement.removeChild(event.target);
  });
  document.getElementById("tagSection").appendChild(tag);
};

// Clonage du tag s'il est selectionné
const tagListener = () => {
  const allTags = document.querySelectorAll(".panel-body a"); // Si on met "li", on peut cloner "a" ou "li" selon ou on clique
  allTags.forEach((li) => li.addEventListener("click", (event) => {
    const tag = event.target.cloneNode(true);
    switch (li.closest("ul").id) {
      case "ingredients-list":
        tagTemplate("ingredientsTag", tag);
        break;
      case "appliance-list":
        tagTemplate("applianceTag", tag);
        break;
      case "ustensils-list":
        tagTemplate("ustensilsTag", tag);
        break;
        // no default
    }
  }));
  console.log(allTags);
};
