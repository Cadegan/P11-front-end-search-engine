/* eslint-disable no-underscore-dangle */
export default class RecipeTemplate {
  constructor(recipe) {
    this._recipe = recipe;
  }

  templateOfRecipe() {
    return `
        <article class="recipe">
            <img src="" alt="Recipe picture" >
            <div class="recipeHeading">
                <p class="recipeTitel">${this._recipe.name}</p>
                <img src="" alt="Clock logo">
                <p class="recipeTime">${this._recipe.time}</p>
            </div>
            <div class="recipeBody">
                <div class="allNeedCook">${this._recipe.ingredients}</div>
                <div class="explanationRecipe">${this._recipe.description}</div>
            </div>
        </article>
      `;
  }
}
