/* eslint-disable import/extensions */
import RecipeTemplate from "../factories/templates/recipeTemplate.js";

// let data = await fetch("../data/recipes.json");

const updateRecipes = (data) => {
  // data = await data.json();
  window.recipeCards = new RecipeTemplate(data);
  // window.searchBar = new SearchBar(data);
};

const init = () => {
  updateRecipes(recipes);
  mainInputSearch();
};

init();

const filterList = (data) => {
  const ingredientsList = [];
  const applianceList = [];
  const ustensilsList = [];

  

}

// document.getElementById("main-search").addEventListener("input", mainInputSearch);
