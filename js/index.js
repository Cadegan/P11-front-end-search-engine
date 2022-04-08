/* eslint-disable import/extensions */
import RecipeTemplate from "../factories/templates/recipeTemplate.js";
import SearchBar from "./searchBarN.js";

async function init() {
  let data = await fetch("../data/recipes.json");
  data = await data.json();
  window.recipeCards = new RecipeTemplate(data);
  window.searchBar = new SearchBar(data);
}

init();
