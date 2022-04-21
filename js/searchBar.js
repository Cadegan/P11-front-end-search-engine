// import init from "./index";

const mainInputSearch = () => {
  const filtredRecipes = recipes;
  const inputEnter = document.querySelector("#mainInputSearch").value.toLowerCase();

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
};

document.getElementById("mainInputSearch").addEventListener("input", mainInputSearch);
