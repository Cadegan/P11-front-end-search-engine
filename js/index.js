/* eslint-disable import/extensions */
import recipes from "../data/recipes.js";
import { inputSearchEvents, inputSecondarySearch } from "./searchBar.js";

import RecipeCardTemplate from "../factories/templates/recipeCardTemplate.js";
import { tagDisplay, listDisplay } from "./tagEvents.js";

const updateRecipes = (data) => {
  window.recipeCards = new RecipeCardTemplate(data);
  listDisplay(data);
  tagDisplay();
};

function init() {
  updateRecipes(recipes);
  // functionSearch();
  inputSearchEvents();
  inputSecondarySearch();
}

init();

export { updateRecipes };
