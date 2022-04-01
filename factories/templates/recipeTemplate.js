export default class RecipeTemplate {
  constructor(recipe) {
    this.recipes = recipe;
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
}
