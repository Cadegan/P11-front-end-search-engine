/* eslint-disable no-underscore-dangle */
export default class RecipeData {
  constructor(recipes) {
    this._id = recipes.id;
    this._name = recipes.name;
    this._servings = recipes.servings;
    this._ingredients = recipes.ingredients;
    this._time = recipes.time;
    this._description = recipes.description;
    this._appliance = recipes.appliance;
    this.ustensils = recipes.ustensils;
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
