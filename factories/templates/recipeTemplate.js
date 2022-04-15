export default class RecipeTemplate {
  constructor(recipe) {
    this.recipes = recipe;
    this.container = document.querySelector(".listRecipesSection");
    this.showRecipe();
  }

  showRecipe() {
    this.container.innerHTML = this.templateOfRecipe();
  }

  templateOfRecipe() {
    let recipeCard = "";
    for (let i = 0; i < this.recipes.length; i++) {
      recipeCard += `
        <article class="recipeCard col-12 col-lg-4">
          <div class="card mb-4 mb-lg-0 border-light">
            <img src="" class="card-img-top" alt="Recipe picture">
            <div class="recipeHeading">
              <h5 class="recipeTitel">${this.recipes[i].name}</h5>
              <div class="cookingTime">
                <img src="img/clock.svg" alt="Clock logo">
                <p class="timer">${this.recipes[i].time} min</p>
              </div>
            </div>
            <div class="mainRecipeBody">
              <div class="recipeBody">
                <div class="allNeedCook">${this.getRecipeElements(i)}</div>
                <p class="explanationRecipe">${this.recipes[i].description}</p>
              </div>
            </div>
        </article>
        `;
    }
    return recipeCard;
  }

  getRecipeElements(i) {
    let text = "";
    let ingredient;
    let quantity;
    let unit;
    for (let j = 0; j < this.recipes[i].ingredients.length; j++) {
      ingredient = this.recipes[i].ingredients[j].ingredient !== undefined ? this.recipes[i].ingredients[j].ingredient : "";
      quantity = this.recipes[i].ingredients[j].quantity !== undefined ? this.recipes[i].ingredients[j].quantity : "";
      unit = this.recipes[i].ingredients[j].unit !== undefined ? this.recipes[i].ingredients[j].unit : "";
      text += `
      <ul>
        <li class="ingredient">
          ${ingredient}:&nbsp;
        </li>
        <li class="quntity">
          ${quantity}
        </li>
        <li class="unit">
          ${unit}
        </li>
      </ul>
      `;
    }
    return text;
  }
}
