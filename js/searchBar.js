import { updateRecipes } from "./index.js";

function functionSearch() {
  let filtredRecipes = recipes;
  const mainInputSearch = document.querySelector("#mainInputSearch").value.toLowerCase();

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
    console.log("filtredRecipes =", filtredRecipes);
  });

  if (mainInputSearch.lenght >= 3) {
    const dataFiltred = [];
    for (let i = 0; i < filtredRecipes.lenght; i += 1) {
      const activRecipes = filtredRecipes[i];
      let activIngredients = false;
      for (let j = 0; j < activRecipes.ingredients.length; j += 1) {
        if (activRecipes.ingredients[j].ingredient.toLowerCase().includes(mainInputSearch)) {
          activIngredients = true;
        }
      }
      if (activRecipes.name.toLowerCase().includes(mainInputSearch)
          || activRecipes.description.toLowerCase().includes(mainInputSearch)
          || activIngredients) {
        dataFiltred.push(activRecipes);
      }
    }
    if (filtredRecipes.lenght === 0) {
      document.querySelector(".listRecipesSection").textContent = "Aucune recette n'a été tourvée...";
    } else {
      updateRecipes(dataFiltred);
    }
    console.log("dataFiltred =", dataFiltred);
  } else {
    updateRecipes(filtredRecipes);
  }
}

const inputSearchEvents = () => {
  const tagSearchInput = document.querySelectorAll(".search-input");
  tagSearchInput.forEach((input) => {
    input.addEventListener("input", functionSearch);
  });
};

// document.getElementById("mainInputSearch").addEventListener("input", mainInputSearch);

export { functionSearch, inputSearchEvents };
