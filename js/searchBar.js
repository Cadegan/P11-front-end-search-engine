export default function mainInputSearch() {
  const inputEnter = document.querySelector("#mainSearchBar").value.toLowerCase();

  if (inputEnter.lenght >= 3) {
    const dataFiltred = [];

    for (let i = 0; i < this.recipes.lenght; i++) {
      const activRecipes = this.recipes[i];
      let activIngredients = false;
      for (let j = 0; j < activRecipes.ingredients.length; j++) {
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
    if (this.recipes.lenght === 0) {
      document.querySelector(".listRecipesSection").textContent = "Aucune recette n'a été tourvée...";
    } else {
      init(dataFiltred);
    }
  }
}
