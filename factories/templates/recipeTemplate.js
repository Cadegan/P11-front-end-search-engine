export default class RecipeTemplate {
  recipeContainerElements = null;

  constructor(recipe) {
    this.recipes = recipe;
    this.container = this.recipeContainerElements.querySelector(".gallery-container");
    this.templateOfRecipe();
    this.showRecipe();
  }

  showRecipe() {
    this.container.innerHTML = this.templateOfRecipe();
  }

  getIngredientsData (i) {
    let details = "";
    let ingredient;
    let quantity;
    let unit;
    for (let j = 0; j < this.recipes.length; j++ ) {
      ingredient =
        this.recipes[i].ingredients[j].ingredient
    }

  }

  // templateOfRecipe() {
  //   return `
  //       <article class="recipe">
  //           <img src="" alt="Recipe picture" >
  //           <div class="recipeHeading">
  //               <p class="recipeTitel">${this._recipe.name}</p>
  //               <img src="" alt="Clock logo">
  //               <p class="recipeTime">${this._recipe.time}</p>
  //           </div>
  //           <div class="recipeBody">
  //               <div class="allNeedCook">${this._recipe.ingredients}</div>
  //               <div class="explanationRecipe">${this._recipe.description}</div>
  //           </div>
  //       </article>
  //     `;
  // }
}

// /* eslint-disable no-underscore-dangle */
// export default class RecipeTemplate {
//   constructor(recipe) {
//     this._recipe = recipe;
//   }
