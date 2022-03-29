import { recipes } from '../data/recipes';

const galleryContainer = document.querySelector('.gallery-container');
const gallery = [];

// async function init () {
//     await fetch("/data/recipes.json")
//         .then(res => res.json())
//         .then((data) => {
//             recipes = data.recipes.find(id)
//         })

// }

function showGallery(recipes) {
  recipes.forEach((recipe) => {
    const recipeData = new RecipeData(recipe);
    const recipeTemplate = new RecipeTemplate(recipeData);

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
