import { recipes } from "../data/recipes.js";
import RecipeData from "../factories/models/recipeData.js";
import RecipeTemplate from "../factories/templates/recipeTemplate.js";

const recipesArray = Object.entries(recipes);
// console.log(recipesArray);
// console.log(recipes)

const galleryContainer = document.querySelector(".gallery-container");
const gallery = [];

function showGallery() {
  recipesArray.forEach((recipe) => {
    const recipeData = new RecipeData(recipe);
    const recipeTemplate = new RecipeTemplate(recipeData);
    // galleryContainer.appendChild(recipeTemplate);
    galleryContainer.innerHTML += recipeTemplate;
  });
}

const recipesDisplay = () => {
  galleryContainer.innerHTML = "";
  recipesArray.forEach((recipe) => {
    gallery.push(recipe);
  });
  showGallery(gallery);
};

async function init() {
  recipesDisplay();
}

init();
