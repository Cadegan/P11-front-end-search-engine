/* eslint-disable no-console */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import recipes from "../data/recipes.js";
import updateRecipes from "./index.js";

const functionSearch = () => {
  let dataFiltredByTag = recipes;
  const mainInputSearch = document.getElementById("mainInputSearch").value.toLowerCase();

  // TagSelected
  document.querySelectorAll("#tagSection li").forEach((tag) => {
    const tagSelected = tag.textContent.toLowerCase();
    dataFiltredByTag = dataFiltredByTag.filter((recipe) =>
      // filter() retourne un nouveau tableau si le callback some(e) retourne "true"
      // cad si un element dans "recipes" correspond au "tagSelected"
      recipe.ingredients.some((e) => e.ingredient.toLowerCase().includes(tagSelected))
      || recipe.appliance.toLowerCase().includes(tagSelected)
      || recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(tagSelected)));
  });

  // Input search principal
  if (mainInputSearch.length >= 3) {
    const dataFiltredByInput = [];
    // Pour chercher les ingredients il faut faire une double boucle :
    // parmi les recettes actives/taguée puis les ingredients disponibles
    for (let i = 0; i < dataFiltredByTag.length; i += 1) {
      const activeRecipesByTag = dataFiltredByTag[i];
      let IngredientIsVisible = false;
      for (let j = 0; j < activeRecipesByTag.ingredients.length; j += 1) {
        if (activeRecipesByTag.ingredients[j].ingredient.toLowerCase().includes(mainInputSearch)) {
          IngredientIsVisible = true;
        }
      }
      if (activeRecipesByTag.name.toLowerCase().includes(mainInputSearch)
          || activeRecipesByTag.description.toLowerCase().includes(mainInputSearch)
          || IngredientIsVisible) {
        dataFiltredByInput.push(activeRecipesByTag);
      }
    }
    if (dataFiltredByInput.length === 0) {
      document.querySelector("#noRecipeMessage").textContent = "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.";
      document.querySelector(".listRecipesSection").textContent = "";
    } else {
      updateRecipes(dataFiltredByInput);
      document.querySelector("#noRecipeMessage").textContent = "";
    }
  } else {
    updateRecipes(dataFiltredByTag);
    document.querySelector("#noRecipeMessage").textContent = "";
  }
};

// Inputs secondaires
function searchInList(listArrayFocus, inputValue) {
  for (let i = 0; i < listArrayFocus.length; i += 1) {
    const itemToHide = listArrayFocus[i];
    const itemToHideName = itemToHide.textContent.toLowerCase();
    if (!itemToHideName.includes(inputValue)) {
      itemToHide.classList.add("item-hidden");
    } else {
      itemToHide.classList.remove("item-hidden");
    }
  }
}

// Cache ou affiche les éléments des listes en fonction des entrées secondaires
function searchInListListener(event) {
  event.preventDefault();
  if (event.target.id === "ingredients-SearchInput") {
    const listArrayFocus = document.querySelectorAll("#ingredients-list li");
    const inputValue = document.querySelector("#ingredients-SearchInput").value.toLowerCase();
    searchInList(listArrayFocus, inputValue);
  } else if (event.target.id === "appliance-SearchInput") {
    const listArrayFocus = document.querySelectorAll("#appliance-list li");
    const inputValue = document.querySelector("#appliance-SearchInput").value.toLowerCase();
    searchInList(listArrayFocus, inputValue);
  } else {
    const listArrayFocus = document.querySelectorAll("#ustensils-list li");
    const inputValue = document.querySelector("#ustensils-SearchInput").value.toLowerCase();
    searchInList(listArrayFocus, inputValue);
  }
}

// Ecoute des évènement
// Dans le cas d'une recherche via l'input principal
function inputSearchEvents() {
  document.getElementById("mainInputSearch").addEventListener("input", functionSearch);
}

// Dans le cas d'une recherche via les inputs secondaires
function inputSecondarySearch() {
  document.getElementById("ingredients-SearchInput").addEventListener("input", searchInListListener);
  document.getElementById("appliance-SearchInput").addEventListener("input", searchInListListener);
  document.getElementById("ustensils-SearchInput").addEventListener("input", searchInListListener);
}

export { functionSearch, inputSearchEvents, inputSecondarySearch };
