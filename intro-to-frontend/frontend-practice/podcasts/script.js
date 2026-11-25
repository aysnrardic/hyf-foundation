const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

const podcastList = document.createElement("ul");

for (let i = 0; i < podcasts.length; i++) {
  const podcast = podcasts[i];

  const li = document.createElement("li");

  const heading = document.createElement("h1");
  heading.innerHTML = podcast.name;

  li.appendChild(heading);

  if (podcast.imageUrl) {
    const image = document.createElement("img");

    image.src = podcast.imageUrl;
    image.width = 250;

    li.appendChild(image);
  }

  podcastList.appendChild(li);
}

document.body.appendChild(podcastList);
