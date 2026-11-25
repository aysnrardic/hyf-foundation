function insertImage(imageUrl, elementToAppendImageTo) {
  const image = document.createElement("img");

  image.src = imageUrl;

  elementToAppendImageTo.appendChild(image);
}

insertImage("https://picsum.photos/536/354", document.querySelector("body"));
