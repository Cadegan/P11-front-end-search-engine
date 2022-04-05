/* eslint-disable import/extensions */
import RecipeTemplate from "../factories/templates/recipeTemplate.js";
// import RecipeData from "../factories/models/recipeData.js";

async function init() {
  let data = await fetch("../data/recipes.json");
  data = await data.json();
  window.recipeCards = new RecipeTemplate(data);
}

init();
