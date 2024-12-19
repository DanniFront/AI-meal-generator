function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#generated-recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let generatedRecipeElement = document.querySelector("#generated-recipe");
  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "748d5734be19te1af0e3a12aa9abaofd";
  let prompt = `Generate a simple and short swedish recipe about ${instructionsInput.value}`;
  let context =
    "You are a professional chef and know many simple and short swedish recipes. You may ONLY write ingredients and not instructions. Please answer in pure html, but don´t write ```html``` and with seperate lines.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating");

  let recipeElement = document.querySelector("#generated-recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="blink">Searching for a swedish ${instructionsInput.value} recipe for you 😋</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
