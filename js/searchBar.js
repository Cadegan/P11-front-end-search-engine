/* eslint-disable no-console */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import recipes from "../data/recipes.js";
import updateRecipes from "./index.js";

const functionSearch = () => {
  let dataFiltred = recipes;
  const mainInputSearch = document.getElementById("mainInputSearch").value.toLowerCase();

  // TagSelected
  document.querySelectorAll("#tagSection li").forEach((tag) => {
    const tagSelected = tag.textContent.toLowerCase();
    dataFiltred = dataFiltred.filter((recipe) =>
      // filter() retourne un nouveau tableau si le callback some(e) retourne "true"
      // cad si un element dans "recipes" correspond au "tagSelected"
      recipe.ingredients.some((e) => e.ingredient.toLowerCase().includes(tagSelected))
      || recipe.appliance.toLowerCase().includes(tagSelected)
      || recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(tagSelected)));
  });

  // Input search principal
  if (mainInputSearch.length >= 3) {
    dataFiltred = dataFiltred.filter((recipe) =>
      recipe.name.toLowerCase().includes(mainInputSearch)
      || recipe.description.toLowerCase().includes(mainInputSearch)
      || recipe.ingredients.some((e) => e.ingredient.toLowerCase().includes(mainInputSearch)));
  }
  // else {
  //   updateRecipes(dataFiltred);
  // }
  updateRecipes(dataFiltred);

  if (dataFiltred.length === 0) {
    document.querySelector("#noRecipeMessage").textContent = "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.";
  } else {
    document.querySelector("#noRecipeMessage").textContent = "";
  }
  console.log("dataFiltred =", dataFiltred);
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
