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

  templateOfRecipe() {
    let recipeCard = "";
    for (let i = 0; i < this.recipes.length; i++) {
      recipeCard += `
        <article class="recipe">
          <img src="" alt="Recipe picture" >
            <div class="recipeHeading">
              <p class="recipeTitel">${this.recipes[i].name}</p>
              <img src="" alt="Clock logo">
              <p class="recipeTime">${this.recipes[i].time}</p>
            </div>
            <div class="recipeBody">
              <div class="allNeedCook">${""}</div>
              <div class="explanationRecipe">${this.recipes[i].description}</div>
            </div>
        </article>
        `;
    }
    return recipeCard;
  }

  // getIngredientsData(i) {
  //   let details = "";
  //   let ingredient;
  //   // let quantity;
  //   // let unit;
  //   for (let j = 0; j < this.recipes.length; j++) {
  //     ingredient = this.recipes[i].ingredients[j].ingredient !== undefined
  //      ? this.recipes[i].ingredients[j].ingredient : "";
  //     details += `
  //   <li>
  //     <span class="ingredient">
  //       ${ingredient}
  //     </span>
  //   </li>
  //   `;
  //   }
  //   return details;
  // }
}

// /* eslint-disable no-underscore-dangle */
// export default class RecipeTemplate {
//   constructor(recipe) {
//     this._recipe = recipe;
//   }
