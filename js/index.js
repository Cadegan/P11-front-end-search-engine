/* eslint-disable import/extensions */
import RecipeTemplate from "../factories/templates/recipeTemplate.js";

// let data = await fetch("../data/recipes.json");

const updateRecipes = (data) => {
  // data = await data.json();
  // eslint-disable-next-line no-undef
  window.recipeCards = new RecipeTemplate(data);
  // window.searchBar = new SearchBar(data);
};

const init = () => {
  updateRecipes(recipes);
  mainInputSearch();
};

init();
