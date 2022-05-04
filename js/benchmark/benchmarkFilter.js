const functionSearch = (filter) => {
  const dataFiltredByInput = [];
  for (let i = 0; i < recipes.length; i += 1) {
    const activeRecipesByTag = recipes[i];
    let IngredientIsVisible = false;
    for (let j = 0; j < activeRecipesByTag.ingredients.length; j += 1) {
      if (activeRecipesByTag.ingredients[j].ingredient.toLowerCase().includes(filter)) {
        IngredientIsVisible = true;
      }
    }
    if (activeRecipesByTag.name.toLowerCase().includes(filter)
            || activeRecipesByTag.description.toLowerCase().includes(filter)
            || IngredientIsVisible) {
      dataFiltredByInput.push(activeRecipesByTag);
    }
  }
};

functionSearch("cou");

//

let functionSearch = (filter) => {
  let dataFiltred = recipes;

    dataFiltred = dataFiltred.filter((recipe) => {
      recipe.name.toLowerCase().includes(filter)
      || recipe.description.toLowerCase().includes(filter)
      || recipe.ingredients.some((e) => e.ingredient.toLowerCase().includes(filter))
    });

  // return dataFiltred;
};

functionSearch("cou");