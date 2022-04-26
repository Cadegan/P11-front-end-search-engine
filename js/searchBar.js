import RecipeCardTemplate from "../factories/templates/recipeCardTemplate.js";
import { tagActivListener, tagListDisplay } from "./tagEvents.js";
// import recipes from "../data/recipes";

const updateRecipes = (data) => {
  window.recipeCards = new RecipeCardTemplate(data);
  tagListDisplay(data);
  tagActivListener();
};

function mainInputSearch() {
  let filtredRecipes = recipes;
  console.log("filtredRecipes =", filtredRecipes);
  const inputEnter = document.querySelector("#mainInputSearch").value.toLowerCase();

  // TagSearch
  document.querySelectorAll("#tagSection li").forEach((tag) => {
    const tagSearchInput = tag.textContent.toLowerCase();
    filtredRecipes = filtredRecipes.filter((recipe) =>
      // filter() retourne un nouveau tableau si le callback some(e) retourne "true"
      // cad si un element dans "recipes" correspond au "tagSearchInput"
      recipe.ingredients.some((e) => e.ingredient.toLowerCase().includes(tagSearchInput))
      || recipe.appliance.toLowerCase().includes(tagSearchInput)
      || recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(tagSearchInput)));
    updateRecipes(filtredRecipes);
  });

  if (inputEnter.lenght >= 3) {
    const dataFiltred = [];
    for (let i = 0; i < filtredRecipes.lenght; i += 1) {
      const activRecipes = filtredRecipes[i];
      let activIngredients = false;
      for (let j = 0; j < activRecipes.ingredients.length; j += 1) {
        if (activRecipes.ingredients[j].ingredient.toLowerCase().includes(inputEnter)) {
          activIngredients = true;
        }
      }
      if (activRecipes.name.toLowerCase().includes(inputEnter)
          || activRecipes.description.toLowerCase().includes(inputEnter)
          || activIngredients) {
        dataFiltred.push(activRecipes);
      }
    }
    if (filtredRecipes.lenght === 0) {
      document.querySelector(".listRecipesSection").textContent = "Aucune recette n'a été tourvée...";
    } else {
      updateRecipes(dataFiltred);
    }
  } else {
    updateRecipes(filtredRecipes);
  }
}

const searchEvents = () => {
  const tagSearchInput = document.querySelectorAll(".search-input");
  tagSearchInput.forEach((input) => {
    input.addEventListener("input", mainInputSearch);
  });
};

// document.getElementById("mainInputSearch").addEventListener("input", mainInputSearch);

// export { mainInputSearch, searchEvents };
export { updateRecipes };
