const button = document.querySelector("#click-button");

button.addEventListener("click", function () {
  button.textContent = "Button clicked";
});

const themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Light Mode";
  } else {
    themeButton.textContent = "Dark Mode";
  }
});
