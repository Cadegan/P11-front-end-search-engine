/* eslint-disable import/extensions */
import RecipeTemplate from "../factories/templates/recipeTemplate.js";
import { tagActivListener, tagListDisplay } from "./tagEvents.js";
import recipes from "../data/recipes.js";

const updateRecipes = (data) => {
  window.recipeCards = new RecipeTemplate(data);
  tagListDisplay(data);
  tagActivListener();
};

const init = () => {
  updateRecipes(recipes);
  // mainInputSearch();
};

init();
