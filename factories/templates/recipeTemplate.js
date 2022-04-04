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
            <img src="" class="card-img-top" alt="Recipe picture" >
              <div class="recipeHeading">
                <h5 class="recipeTitel">${this.recipes[i].name}</p>
                <img src="" alt="Clock logo">
                <p class="recipeTime">${this.recipes[i].time}</p>
              </div>
              <div class="recipeBody">
                <div class="allNeedCook">${""}</div>
                <div class="explanationRecipe">${this.recipes[i].description}</div>
              </div>
          </div>
        </article>
        `;
    }
    return recipeCard;
  }

  allNeedCook() {
    let text = "";
    let ingredient;
    let quantity;
    let unit;
    for (let j = 0; j < this.recipes[i].ingredients.length; j++) {

    }
  }
}
