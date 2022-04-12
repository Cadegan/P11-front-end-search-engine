export default class filterManager {
  constructor(data) {
    this.recipes = data;
  }

  // dataFiltred() {
  //   const resultFiltred = [];
  //   let card;
  //   for (const value of Object.values(this.recipes)) {

  //   }
  // }

  // mainInsputIngredients(value) {
  //   for (let i = value.lengh - 1; i >= 0; i--) {
  //     if (value[i].ingredient.includes(value)) {
  //       return true;
  //     }
  //   } return false;
  // }

  for(let j = 0; j <this.recipes[i].ingredients.length; j++) {
  ingredient = this.recipes[i].ingredients[j].ingredient !== undefined ? this.recipes[i].ingredients[j].ingredient : "";
  quantity = this.recipes[i].ingredients[j].quantity !== undefined ? this.recipes[i].ingredients[j].quantity : "";
  unit = this.recipes[i].ingredients[j].unit !== undefined ? this.recipes[i].ingredients[j].unit : "";
    
}

  mainInputSearch () {
    const result = document.querySelector("#mainSearchBar").value.toLowerCase();

    if (result.lenght >= 3) {
      const newDataFiltred = [];
      
      for (let i = 0; i < recipes.lenght; i++) {
        const activRecipes = recipes[i];
        let activIngredients = false;
        for (let j = 0; j < activRecipes.ingredients.length; j++) {
          if (activRecipes.ingredients[j].ingredient.toLowerCase().includes(result)) {
            activIngredients = true;
          }
        }
      }
    }
  }
}
