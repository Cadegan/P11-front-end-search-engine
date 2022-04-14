/* eslint-disable import/extensions */
import RecipeTemplate from "../factories/templates/recipeTemplate.js";
import mainInputSearch from "./searchBar.js";

let data = await fetch("../data/recipes.json");

async function init() {
  data = await data.json();
  window.recipeCards = new RecipeTemplate(data);
  // window.searchBar = new SearchBar(data);
}

const update = () => {
  init(data);
  mainInputSearch();
};

update();
