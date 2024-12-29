function generateTravelDestination(event) {
  event.preventDefault();

  new Typewriter("#default-travel-destination", {
    strings: "London, United Kingdom",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let travelFormElement = document.querySelector(
  "#travel-destination-generator-form"
);
travelFormElement.addEventListener("submit", generateTravelDestination);
