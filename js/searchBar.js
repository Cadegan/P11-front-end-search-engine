function mainInputSearch() {
  const result = document.querySelector("#mainSearchBar").value.toLowerCase();

  if (result.lenght >= 3) {
    const newDataFiltred = [];

    for (let i = 0; i < this.recipes.lenght; i++) {
      const activRecipes = this.recipes[i];
      let activIngredients = false;
      for (let j = 0; j < activRecipes.ingredients.length; j++) {
        if (activRecipes.ingredients[j].ingredient.toLowerCase().includes(result)) {
          activIngredients = true;
        }
      }
      if (activRecipes.name.toLowerCase().includes(result)
              || activRecipes.description.toLowerCase().includes(result)
              || activIngredients) {
        newDataFiltred.push(activRecipes);
      }
    }
    if (this.recipes.lenght === 0) {
      document.querySelector(".listRecipesSection").textContent = "Aucune recette n'a été tourvée...";
    } else {
      init(newDataFiltred);
    }
  }
}
