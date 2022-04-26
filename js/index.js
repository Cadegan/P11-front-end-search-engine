/* eslint-disable import/extensions */
import { inputSearchEvents, functionSearch } from "./searchBar.js";

import RecipeCardTemplate from "../factories/templates/recipeCardTemplate.js";
import { tagActivListener, tagListDisplay } from "./tagEvents.js";

function updateRecipes(data) {
  window.recipeCards = new RecipeCardTemplate(data);
  tagListDisplay(data);
  tagActivListener();
}

function init() {
  updateRecipes(recipes);
  functionSearch();
  inputSearchEvents();
}

init();

export { updateRecipes };
