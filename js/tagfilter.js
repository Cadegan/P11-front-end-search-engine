export default class TagListTemplate {
  constructor(recipe, container, arrayWithoutDuplicate) {
    this.recipe = recipe;
    this.container = container;
    this.arrayWithoutDuplicate = arrayWithoutDuplicate;
  }

  ingredientsList() {
    this.recipe.ingredients.forEach((ingredient) => {
      ingredient.ingredient = ingredient.ingredient.toLowerCase();
      ingredient.ingredient = ingredient.ingredient.charAt(0).toUpperCase()
      + ingredient.ingredient.slice(1);
      if (!this.arrayWithoutDuplicate.includes(ingredient.ingredient)) {
        this.arrayWithoutDuplicate.push(ingredient.ingredient);
        const filterIngredientList = document.createElement("li");
        filterIngredientList.setAttribute("type", ingredient.ingredient);
        filterIngredientList.innerHTML += ingredient.ingredient;
        this.container.appendChild(filterIngredientList);
      }
    });
    return this.container;
  }

  applianceList() {
    this.recipe.appliance = this.recipe.appliance.toLowerCase();
    this.recipe.appliance = this.recipe.appliance.charAt(0).toUpperCase()
      + this.recipe.appliance.slice(1);
    if (!this.arrayWithoutDuplicate.includes(this.recipe.appliance)) {
      this.arrayWithoutDuplicate.push(this.recipe.appliance);
      const filterApplianceList = document.createElement("li");
      filterApplianceList.setAttribute("type", this.recipe.appliance);
      filterApplianceList.innerHTML += this.recipe.appliance;
      this.container.appendChild(filterApplianceList);
    }
    return this.container;
  }

  ustensilsList() {
    this.recipe.ustensils.forEach((ustensils) => {
      ustensils = ustensils.toLowerCase();
      ustensils = ustensils.charAt(0).toUpperCase()
        + ustensils.slice(1);
      if (!this.arrayWithoutDuplicate.includes(ustensils)) {
        this.arrayWithoutDuplicate.push(ustensils);
        const filterUstensilsList = document.createElement("li");
        filterUstensilsList.setAttribute("type", ustensils);
        filterUstensilsList.innerHTML += ustensils;
        this.container.appendChild(filterUstensilsList);
      }
    });
    return this.container;
  }
}
