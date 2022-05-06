/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
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
}

function listDisplay(dataFiltred) {
  const resetAllfilters = document.querySelectorAll(".panel-body");
  resetAllfilters.forEach((data) => {
    data.innerHTML = "";
  });
  const ingredientContainer = document.querySelector("#ingredients-list");
  const applianceContainer = document.querySelector("#appliance-list");
  const ustensilsContainer = document.querySelector("#ustensils-list");

  const ingredientsArray = [];
  const applianceArray = [];
  const ustensilsArray = [];

  dataFiltred.forEach((data) => {
    const ingredientsFilterShow = new ListTemplate(data, ingredientContainer, ingredientsArray);
    ingredientsFilterShow.ingredientsList();

    const appliancesFilterShow = new ListTemplate(data, applianceContainer, applianceArray);
    appliancesFilterShow.applianceList();

    const ustensilsFilterShow = new ListTemplate(data, ustensilsContainer, ustensilsArray);
    ustensilsFilterShow.ustensilsList();
  });
}

export { listDisplay };
export { tagDisplay };
