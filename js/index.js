/* eslint-disable import/extensions */
import RecipeTemplate from "../factories/templates/recipeTemplate.js";
import mainInputSearch from "./searchBar.js";

// let data = await fetch("../data/recipes.json");

export default async function init() {
  // data = await data.json();
  // eslint-disable-next-line no-undef
  window.recipeCards = new RecipeTemplate(recipes);
  // window.searchBar = new SearchBar(data);
}

const update = () => {
  init();
  mainInputSearch();
};

update();

// async function initD () {
//   await fetch("../data/recipes.json");
//   .then(res => res.json())
//   .then((data) => {

//   })
// }