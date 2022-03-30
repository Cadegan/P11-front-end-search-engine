import { recipes } from '../data/recipes';
import RecipeData from '../factories/models/recipeData';
import RecipeTemplate from '../factories/templates/recipeTemplate';

const galleryContainer = document.querySelector('.gallery-container');
const gallery = [];

function showGallery() {
  recipes.forEach((recipe) => {
    const recipeData = new RecipeData(recipe);
    const recipeTemplate = new RecipeTemplate(recipeData);
    // galleryContainer.appendChild(recipeTemplate);
    galleryContainer.innerHTML += recipeTemplate;
  });
}

const recipesDisplay = () => {
  galleryContainer.innerHTML = '';
  recipes.forEach((recipe) => {
    gallery.push(recipe);
  });
  showGallery(gallery);
};

async function init() {
  recipesDisplay();
}

init();
