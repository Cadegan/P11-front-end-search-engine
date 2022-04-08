export default class TagFilter {
  constructor(filter) {
    this.name = filter.name;

    this.dom = document.createElement("");
    this.filterList = document.createElement("ul");
    this.filterList.id = this.name;
  }
}
