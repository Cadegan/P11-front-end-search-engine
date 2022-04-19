/* eslint-disable import/extensions */
import RecipeTemplate from "../factories/templates/recipeTemplate.js";

const updateRecipes = (data) => {
  // data = await data.json();
  window.recipeCards = new RecipeTemplate(data);
  // filterList(data);
  // window.searchBar = new SearchBar(data);
};

const init = () => {
  updateRecipes(recipes);
  mainInputSearch();
};

init();
