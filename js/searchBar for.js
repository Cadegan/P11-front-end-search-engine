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
      const activRecipe = dataFiltredByTag[i];
      let recipeIsVisible = false;
      for (let j = 0; j < activRecipe.ingredients.length; j += 1) {
        if (activRecipe.ingredients[j].ingredient.toLowerCase().includes(mainInputSearch)) {
          recipeIsVisible = true;
        }
      }
      if (activRecipe.name.toLowerCase().includes(mainInputSearch)
          || activRecipe.description.toLowerCase().includes(mainInputSearch)
          || recipeIsVisible) {
        dataFiltredByInput.push(activRecipe);
      }
      // console.log(recipeIsVisible);
    }
    if (dataFiltredByInput.length === 0) {
      document.querySelector(".listRecipesSection").textContent = "Aucune recette n'a été tourvée...";
    } else {
      updateRecipes(dataFiltredByInput);
      // listDisplay(dataFiltredByInput);
    }
    console.log("dataFiltredByInput =", dataFiltredByInput);
  } else {
    updateRecipes(dataFiltredByTag);
    // listDisplay(dataFiltredByTag);
  }
  console.log("dataFiltredByTag =", dataFiltredByTag);
};

// Inputs secondaires
function searchInList(listArrayFocus, inputValue) {
  for (let i = 0; i < listArrayFocus.length; i += 1) {
    const itemFiltredArray = listArrayFocus[i];
    // console.log(itemFiltredArray);
    const itemFiltredArrayName = itemFiltredArray.textContent.toLowerCase();
    if (!itemFiltredArrayName.includes(inputValue)) {
      itemFiltredArray.classList.add("item-hidden");
    } else {
      itemFiltredArray.classList.remove("item-hidden");
    }
  }
}

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
