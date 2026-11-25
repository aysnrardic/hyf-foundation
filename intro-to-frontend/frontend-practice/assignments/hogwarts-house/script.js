const nameInput = document.querySelector("#student-name");
const houseButton = document.querySelector("#house-button");
const houseResult = document.querySelector("#house-result");
const houseDescription = document.querySelector("#house-description");

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

houseButton.addEventListener("click", function () {
  const studentName = nameInput.value.trim();

  if (studentName === "") {
    houseResult.textContent = "Please enter your name!";
    houseDescription.textContent = "";
    return;
  }

  const randomIndex = Math.floor(Math.random() * houses.length);
  const selectedHouse = houses[randomIndex];

  houseResult.textContent = `${studentName} belongs in ${selectedHouse}!`;

  if (selectedHouse === "Gryffindor") {
    houseDescription.textContent = "You are brave and courageous!";
  } else if (selectedHouse === "Hufflepuff") {
    houseDescription.textContent = "You are loyal and hardworking!";
  } else if (selectedHouse === "Ravenclaw") {
    houseDescription.textContent = "You are wise and creative!";
  } else {
    houseDescription.textContent = "You are ambitious and determined!";
  }
});
