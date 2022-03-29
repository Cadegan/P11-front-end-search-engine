/* eslint-disable no-underscore-dangle */
export default class RecipeData {
  constructor(recipe) {
    this._id = recipe.id;
    this._name = recipe.name;
    this._servings = recipe.servings;
    this._ingredients = recipe.ingredients;
    this._time = recipe.time;
    this._description = recipe.description;
    this._appliance = recipe.appliance;
    this.ustensils = recipe.ustensils;
  }

  get id() { return this._id; }

  get name() { return this._name; }

  get servings() { return this._servings; }

  get ingredients() { return this._ingredients; }

  get time() { return this._time; }

  get description() { return this._description; }

  get appliances() { return this._appliances; }

  get ustensils() { return this._ustensils; }
}
