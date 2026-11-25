const dishes = ["Biber Dolmasi", "Yaprak Sarma", "Ayvali Kereviz"];

const dishList = document.querySelector("#dish-list");

for (let i = 0; i < dishes.length; i++) {
  const li = document.createElement("li");

  li.textContent = dishes[i];

  dishList.appendChild(li);
}
