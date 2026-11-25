console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
  const mainElement = document.querySelector("main");
  const productList = document.createElement("ul");

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const li = document.createElement("li");

    li.innerHTML = `
    <h2>${product.name}</h2>
    <p>Price: ${product.price} DKK</p>
    <p>Rating: ${product.rating}/10</p>
    `;

    productList.appendChild(li);
  }

  mainElement.appendChild(productList);
}

renderProducts(products);
