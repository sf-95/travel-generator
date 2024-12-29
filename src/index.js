function displayTravelActivity(response) {
  console.log("Travel activity generated");
  new Typewriter("#travel-activity", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateTravelActivity(event) {
  event.preventDefault();

  // Build the API URL
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0b6f603ed9c47fao8478384e5446bt3f";
  let prompt = `User instructions: Generate a travel activity based on ${instructionsInput.value}`;
  let context =
    "You are an adventurous traveler and love to explore. Your mission is to generate 3 travel activities in basic HTML format - the activity only, not explanation. Do not include a header or title. Please do not include any markdown in the response. Ensure each activity is bullet pointed. Sign the travel activity with 'SheCodes AI' inside a <strong> element at the end. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let travelActivityElement = document.querySelector("#travel-activity");
  travelActivityElement.classList.remove("hidden");
  travelActivityElement.innerHTML = `<div class="generating">
     ⏳ Generating travel activities about ${instructionsInput.value}
    </div>`;

  console.log("Generating travel activity");
  console.log(`Prompt: ${prompt}`);
  console.log(`Prompt: ${context}`);
  // Make a call to the API
  axios.get(apiUrl).then(displayTravelActivity);
  // Display the generated travel activity
}

let travelFormElement = document.querySelector(
  "#travel-activity-generator-form"
);
travelFormElement.addEventListener("submit", generateTravelActivity);
