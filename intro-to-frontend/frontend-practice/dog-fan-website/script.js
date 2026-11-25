// Get the HTML elements
const randomDog = document.querySelector("#random-dog");
const breedImage = document.querySelector("#breed-image");
const breedName = document.querySelector("#breed-name");

// Get a random dog image
function getRandomDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      randomDog.src = data.message;
    });
}

// Show the first image
getRandomDog();

// Change the image every 2 seconds
setInterval(getRandomDog, 2000);

// Get all dog breeds
fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
    const breeds = Object.keys(data.message);

    // Select a random breed
    const randomIndex = Math.floor(Math.random() * breeds.length);
    const selectedBreed = breeds[randomIndex];

    breedName.textContent = selectedBreed;

    // Get an image of the selected breed
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
      .then((response) => response.json())
      .then((imageData) => {
        breedImage.src = imageData.message;
      });
  });
