/* eslint-disable import/extensions */
import ListTemplate from "../factories/templates/listTemplate.js";
import { functionSearch } from "./searchBar.js";

const tagTemplate = (tagLabel, tag) => {
  const closeTagLabel = document.createElement("img");
  closeTagLabel.setAttribute("alt", "close icon");
  closeTagLabel.setAttribute("src", "/img/close.svg");
  closeTagLabel.classList.add("closeTag");

  tag.classList.add(tagLabel);
  tag.appendChild(closeTagLabel);
  // tag.setAttribute("onclick", "closeTag(this)");
  // function closeTag(tagFocus) {
  //   tagFocus.parentElement.removeChild();
  // }

  tag.addEventListener("click", (event) => {
    event.target.parentElement.removeChild(event.target);
    functionSearch();
  });

  document.getElementById("tagSection").appendChild(tag);
  functionSearch();
};

// function closeTag(closeTagClic) {
//   closeTagClic.parentNode.removeChild();
// }

// Clonage/création du tag quand il est selectionné
function tagDisplay() {
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

function listDisplay() {
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

export { listDisplay };
export { tagDisplay };
