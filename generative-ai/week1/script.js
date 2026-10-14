const button = document.getElementById("change-color-button");

const colors = ["#F7E6DC", "#DDEBF7", "#E6F4EA", "#FFF2CC", "#EADCF8"];

button.addEventListener("click", function () {
	const randomIndex = Math.floor(Math.random() * colors.length);
	document.body.style.backgroundColor = colors[randomIndex];
});
