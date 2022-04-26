/* eslint-disable import/extensions */
// import recipes from "../data/recipes.js";
// import RecipeCardTemplate from "../factories/templates/recipeCardTemplate.js";
// import { tagActivListener, tagListDisplay } from "./tagEvents.js";
import { updateRecipes } from "./searchBar.js";

// const updateRecipes = (data) => {
//   window.recipeCards = new RecipeCardTemplate(data);
//   tagListDisplay(data);
//   tagActivListener();
// };

const init = () => {
  updateRecipes(recipes);
  // mainInputSearch();
  // searchEvents();
};

init();
