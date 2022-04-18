/* eslint-disable import/extensions */
import RecipeTemplate from "../factories/templates/recipeTemplate.js";

const filterList = (data) => {
  const ingredientsList = [];
  const applianceList = [];
  const ustensilsList = [];
  const allLists = [ingredientsList, applianceList, ustensilsList];
  const article = document.querySelectorAll(".panel-body").forEach((filtersList) => filtersList.innerHTML = "");

  data.forEach((recipe) => {
    recipe.ingredients.forEach((item) => (ingredientsList.indexOf(item.ingredient) === -1 ? ingredientsList.push(item.ingredient) : ""));
  });

  allLists.forEach((list) => {
    list.forEach((item) => {
      const itemList = article.content.cloneNode(true).children[1];
      itemList.firstElementChild.textContent = `${item.slice(0, 1).toUpperCase()}${item.slice(1).toLowerCase()}`;

      const addToFilterList = (filterType) => {
        const inputFilterList = document.getElementById(`${filterType}-SearchInput`).value.toLowerCase();
        if (itemList.firstElementChild.textContent.toLowerCase().includes(inputFilterList)) {
          document.getElementById(`${filterType}-list`).appendChild(itemList);
        }

        switch (list) {
          case ingredientsList:
            addToFilterList("ingredients");
            break;
        }
      };
    });
  });
};

const updateRecipes = (data) => {
  // data = await data.json();
  window.recipeCards = new RecipeTemplate(data);
  filterList(data);
  // window.searchBar = new SearchBar(data);
};

const init = () => {
  updateRecipes(recipes);
  mainInputSearch();
};

init();
