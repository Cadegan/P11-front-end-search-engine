import recipes from "../data/recipes.js";
import { updateRecipes } from "./index.js";

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
    updateRecipes(dataFiltredByTag);
    console.log("dataFiltredByTag =", dataFiltredByTag);
  });

  // Input search
  if (mainInputSearch.lenght >= 3) {
    const dataFiltredByInput = [];
    // Pour chercher les ingredients il faut faire une double boucle :
    // parmi les recettes actives/taguée puis les ingredients disponibles
    for (let i = 0; i < dataFiltredByTag.lenght; i += 1) {
      const activRecipes = dataFiltredByTag[i];
      let activIngredients = false;
      for (let j = 0; j < activRecipes.ingredients.length; j += 1) {
        if (activRecipes.ingredients[j].ingredient.toLowerCase().includes(mainInputSearch)) {
          activIngredients = true;
        }
      }
      if (activRecipes.name.toLowerCase().includes(mainInputSearch)
          || activRecipes.description.toLowerCase().includes(mainInputSearch)
          || activIngredients) {
        dataFiltredByInput.push(activRecipes);
      }
    }
    if (dataFiltredByTag.lenght === 0) {
      document.querySelector(".listRecipesSection").textContent = "Aucune recette n'a été tourvée...";
    } else {
      updateRecipes(dataFiltredByInput);
    }
    console.log("dataFiltredByInput =", dataFiltredByInput);
  } else {
    updateRecipes(dataFiltredByTag);
  }
};

function inputSearchEvents() {
  // const searchInput = document.querySelectorAll(".search-input");
  // searchInput.forEach((input) => {
  //   input.addEventListener("input", functionSearch);
  // });
  document.getElementById("mainInputSearch").addEventListener("input", functionSearch);
}

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

// Inputs secondaires
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

function inputSecondarySearch() {
  document.getElementById("ingredients-SearchInput").addEventListener("input", searchInListListener);
  document.getElementById("appliance-SearchInput").addEventListener("input", searchInListListener);
  document.getElementById("ustensils-SearchInput").addEventListener("input", searchInListListener);
}

export { functionSearch, inputSearchEvents, inputSecondarySearch };
