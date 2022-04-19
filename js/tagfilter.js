export default class TagFilters {
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
        const filterIngredientLink = document.createElement("a");
        filterIngredientList.appendChild(filterIngredientLink);
        filterIngredientLink.innerHTML += ingredient.ingredient;
        this.container.appendChild(filterIngredientList);
      }
    });
    return this.container;
  }
}

// const filterList = (data) => {
//   const ingredientsList = [];
//   const applianceList = [];
//   const ustensilsList = [];
//   const allLists = [ingredientsList, applianceList, ustensilsList];
//   const article = document.querySelectorAll(".panel-body").forEach((filtersList) => filtersList.innerHTML = "");

//   data.forEach((recipe) => {
//     recipe.ingredients.forEach((item) => (ingredientsList.indexOf(item.ingredient) === -1 ? ingredientsList.push(item.ingredient) : ""));
//   });

//   allLists.forEach((list) => {
//     list.forEach((item) => {
//       const itemList = article.content.cloneNode(true).children[1];
//       itemList.firstElementChild.textContent = `${item.slice(0, 1).toUpperCase()}${item.slice(1).toLowerCase()}`;

//       const addToFilterList = (filterType) => {
//         const inputFilterList = document.getElementById(`${filterType}-SearchInput`).value.toLowerCase();
//         if (itemList.firstElementChild.textContent.toLowerCase().includes(inputFilterList)) {
//           document.getElementById(`${filterType}-list`).appendChild(itemList);
//         }

//         switch (list) {
//           case ingredientsList:
//             addToFilterList("ingredients");
//             break;
//         }
//       };
//     });
//   });
// };
