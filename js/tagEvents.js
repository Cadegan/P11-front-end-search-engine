/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
// import recipes from "../data/recipes.js";
import ListTemplate from "../factories/templates/listTemplate.js";
import { functionSearch } from "./searchBar.js";

const generateTagTemplate = (tagLabel, tag) => {
  const closeTagLabel = document.createElement("img");
  closeTagLabel.setAttribute("alt", "close icon");
  closeTagLabel.setAttribute("src", "/img/close.svg");
  closeTagLabel.classList.add("closeTag");

  tag.classList.add(tagLabel);
  tag.appendChild(closeTagLabel);

  tag.addEventListener("click", (event) => {
    event.target.parentElement.removeChild(event.target);
    functionSearch();
  });

  document.getElementById("tagSection").appendChild(tag);
  functionSearch();
};

// Clonage/création du tag quand il est selectionné
function tagDisplay() {
  const allTags = document.querySelectorAll(".panel-body li");
  allTags.forEach((li) => li.addEventListener("click", (event) => {
    const tag = event.target.cloneNode(true);
    switch (li.closest("ul").id) {
      case "ingredients-list":
        generateTagTemplate("ingredientsTag", tag);
        break;
      case "appliance-list":
        generateTagTemplate("applianceTag", tag);
        break;
      case "ustensils-list":
        generateTagTemplate("ustensilsTag", tag);
        break;
        // no default
    }
  }));
  // console.log(allTags);
}

function listDisplay(dataFiltred) {
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

  dataFiltred.forEach((data) => {
    const ingredientsFilterShow = new ListTemplate(data, ingredientFilter, ingredientsList);
    ingredientsFilterShow.ingredientsList();

    const applianceListFilterShow = new ListTemplate(data, applianceFilter, applianceList);
    applianceListFilterShow.applianceList();

    const ustensilsListFilterShow = new ListTemplate(data, ustensilsFilter, ustensilsList);
    ustensilsListFilterShow.ustensilsList();
  });
}

export { listDisplay };
export { tagDisplay };
