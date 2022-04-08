export default class SearchBar {
  constructor(data) {
    this.recipes = data;
    this.mainSearchBar = document.querySelector("#mainSearchBar");
    this.mainSearchBar.oninput = this.mainSearch.bind(this);
  }

  mainSearch() {
    if (this.mainSearchBar.value.length > 3 || this.mainSearchBar.value.length === 0) {
    // function()
    }
  }
}