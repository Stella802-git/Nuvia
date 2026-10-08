const wishes = [
  "A cloud is carrying your wish.",
  "Nuvia heard your wish.",
  "A shooting star sparkles in the distance.",
  "The Cloud Garden is listening.",
  "Your wish floats into the sky."
];

function makeWish() {
  let randomWish =
    wishes[Math.floor(Math.random() * wishes.length)];

  document.getElementById("wishText").textContent = randomWish;
}

document
  .getElementById("wishButton")
  .addEventListener("click", makeWish);