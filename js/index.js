/* eslint-disable import/extensions */
import { inputSearchEvents, functionSearch } from "./searchBar.js";

import RecipeCardTemplate from "../factories/templates/recipeCardTemplate.js";
import { tagActivListener, tagListDisplay } from "./tagEvents.js";

const updateRecipes = (data) => {
  window.recipeCards = new RecipeCardTemplate(data);
  tagListDisplay(data);
  tagActivListener();
};

const init = () => {
  updateRecipes(recipes);
  functionSearch();
  inputSearchEvents();
};

init();

export { updateRecipes };
