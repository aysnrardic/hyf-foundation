fetch(
  "https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json",
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const count = document.querySelector("#astronaut-count");
    const list = document.querySelector("#astronaut-list");

    count.textContent = `There are ${data.number} astronauts in space, they are:`;

    for (let i = 0; i < data.people.length; i++) {
      const li = document.createElement("li");

      li.textContent = data.people[i].name;

      list.appendChild(li);
    }
  });
