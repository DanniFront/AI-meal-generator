function generateRecipe(event) {
  event.preventDefault();

  let recipeElement = document.querySelector("#generated-recipe");

  new Typewriter("#generated-recipe", {
    strings: "Swedish meatballs",
    autoStart: true,
    delay: 40,
    cursor: null,
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
