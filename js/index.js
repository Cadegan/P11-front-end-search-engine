/* eslint-disable import/extensions */
import { inputSearchEvents, functionSearch } from "./searchBar.js";

import RecipeCardTemplate from "../factories/templates/recipeCardTemplate.js";
import { tagDisplay, listDisplay } from "./tagEvents.js";

function updateRecipes(data) {
  window.recipeCards = new RecipeCardTemplate(data);
  listDisplay(data);
  tagDisplay();
}

function init() {
  updateRecipes(recipes);
  functionSearch();
  inputSearchEvents();
}

init();

export { updateRecipes };
