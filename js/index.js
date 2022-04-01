/* eslint-disable import/extensions */
import RecipeTemplate from "../factories/templates/recipeTemplate.js";
// import { recipes } from "../data/recipes.js";
// import RecipeData from "../factories/models/recipeData.js";

async function init() {
  let data = await fetch("./data/recipes.json");
  data = await data.json;
  window.recipeCards = new RecipeTemplate(data);
}

// const galleryContainer = document.querySelector('.gallery-container');
// const gallery = [];

// function showGallery() {
//   recipes.forEach((recipe) => {
//     const recipeData = new RecipeData(recipe);
//     const recipeTemplate = new RecipeTemplate(recipeData);
//     // galleryContainer.appendChild(recipeTemplate);
//     galleryContainer.innerHTML += recipeTemplate;
//   });
// }

// const recipesDisplay = () => {
//   galleryContainer.innerHTML = '';
//   recipes.forEach((recipe) => {
//     gallery.push(recipe);
//   });
//   showGallery(gallery);
// };

// async function init() {
//   recipesDisplay();
// }

init();
