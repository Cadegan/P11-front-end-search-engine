import { updateRecipes } from "./index.js";

function functionSearch() {
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
    // parmi les recettes puis les ingredients disponibles
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
}

function inputSearchEvents() {
  const searchInput = document.querySelectorAll(".search-input");
  searchInput.forEach((input) => {
    input.addEventListener("input", functionSearch);
  });
  document.getElementById("mainInputSearch").addEventListener("input", functionSearch);
}

export { functionSearch, inputSearchEvents };
