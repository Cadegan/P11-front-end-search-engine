/* eslint-disable import/extensions */
import RecipeTemplate from "../factories/templates/recipeTemplate.js";
import ListTemplate from "./listTemplate.js";
// import recipes from "../data/recipes.js";
// import { tagListener } from "./tagEvents.js";
// import { mainInputSearch } from "./searchBar.js";

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

const updateRecipes = (data) => {
  window.recipeCards = new RecipeTemplate(data);
  tagListDisplay(data);
  tagListener();
};

const init = () => {
  updateRecipes(recipes);
  mainInputSearch();
};

init();
