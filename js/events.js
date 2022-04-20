// const searchBoxEvents = () => {
//   const btnInput = document.querySelectorAll(".btn input");
//   btnInput.forEach((input) => {
//     input.addEventListener("focus", (event) => focusEventInput(event));
//   });
// };

// const focusEventInput = (event) => {
//   const input = event.currentTarget;
//   input.parentElement.nextElementSibling.toggle("panel-collapse collapse show");
//   input.value = "";
// };

const tagBuilder = (tagLabel, tag) => {
  const closeTagLabel = document.createElement("div");
  closeTagLabel.setAttribute("alt", "close icon");
  closeTagLabel.setAttribute("src", "./img/close.svg");
  closeTagLabel.classList.add("CloseTag");

  tag.classList.add(tagLabel);
  tag.appendChild(closeTagLabel);
  tag.addEventListener("click", (event) => {
    event.target.parentElement.removeChild(event.target);
  });
  document.getElementById("tagSection");
};

const tagListener = () => {
  const allTags = document.querySelectorAll(".panel-body a");
  allTags.forEach((li) => li.addEventListener("click", (event) => {
    const tag = event.target.cloneNode(true);
    switch (li.closest("ul").id) {
      case "ingredients-list":
        tagBuilder("ingredientsTag", tag);
        break;
      case "appliance-list":
        tagBuilder("applianceTag", tag);
        break;
      case "ustensils-list":
        tagBuilder("ustensilsTag", tag);
        break;
        // no default
    }
  }));
  console.log(allTags);
};
