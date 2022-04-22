const tagTemplate = (tagLabel, tag) => {
  // Création de l'icone close
  const closeTagLabel = document.createElement("img");
  closeTagLabel.setAttribute("alt", "close icon");
  closeTagLabel.setAttribute("src", "/img/close.svg");
  closeTagLabel.classList.add("closeTag");

  // Ajout des class aux tags et des boutons "closeTagLabel"
  tag.classList.add(tagLabel);
  // tag.classList.add("btn");
  tag.appendChild(closeTagLabel);
  tag.setAttribute("onclick", "closeTag(this)");
  document.getElementById("tagSection").appendChild(tag);
};

function closeTag(tag) {
  tag.parentElement.removeChild(tag);
}

// Clonage du tag quand il est selectionné
const tagListener = () => {
  const allTags = document.querySelectorAll(".panel-body li");
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

// export { tagListener };
