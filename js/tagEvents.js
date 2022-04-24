/* eslint-disable import/extensions */
import ListTemplate from "./listTemplate.js";
import recipes from "../data/recipes.js";

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
  tag.setAttribute("onclick", "closeTagFunction(this)");
  document.getElementById("tagSection").appendChild(tag);
};

function closeTagFunction(tag) {
  tag.parentElement.removeChild(tag);
}

// Clonage du tag quand il est selectionné
function tagActivListener() {
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
}

function tagListDisplay() {
  const resetAllfilters = document.querySelectorAll(".panel-body");
  resetAllfilters.forEach((data) => {
    data.innerHTML = "";
  });
  const ingredientFilter = document.querySelector("#ingredients-list");
  const applianceFilter = document.querySelector("#appliance-list");
  const ustensilsFilter = document.querySelector("#ustensils-list");

  const ingredientsList = [];
  const applianceList = [];
  const ustensilsList = [];

  recipes.forEach((recipes) => {
    const ingredientsFilterShow = new ListTemplate(recipes, ingredientFilter, ingredientsList);
    ingredientsFilterShow.ingredientsList();

    const applianceListFilterShow = new ListTemplate(recipes, applianceFilter, applianceList);
    applianceListFilterShow.applianceList();

    const ustensilsListFilterShow = new ListTemplate(recipes, ustensilsFilter, ustensilsList);
    ustensilsListFilterShow.ustensilsList();
  });
}

export { tagListDisplay };
export { tagActivListener };
// export { closeTagFunction };
