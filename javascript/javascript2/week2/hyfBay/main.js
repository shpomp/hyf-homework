console.log("Script loaded");

const availableProducts = getAvailableProducts();
const productsUL = document.querySelector("section.products ul");

function renderProducts(availableProducts) {
  // your code here
  availableProducts.forEach((product) => {
    const li = document.createElement("li");
    li.setAttribute("class", "product-info");
    li.innerHTML = `<h4 class="product-name">${product.name}</h4>
    <span>${product.price}</span>
    <span>${product.rating}</span>
    <span>${product.shipsTo} </span>`;
    productsUL.appendChild(li);
  });
}
renderProducts(availableProducts);

let productInputField = document.getElementById("search-input");
productInputField.addEventListener("keyup", productSearch);

let priceInputField = document.getElementById("max-price");
priceInputField.addEventListener("keyup", setPrice);

// let sortOption = document.getElementById("sort");
// sortOption.addEventListener("onchange", sort); why does not work?

function productSearch() {
  productsUL.innerHTML = "";
  //empty all each time and just render matching
  let searchInputText = document
    .getElementById("search-input")
    .value.toLowerCase();
  console.log(searchInputText);
  let filteredNameProducts = availableProducts.filter((product) =>
    product.name.toLowerCase().includes(searchInputText)
  );
  console.log(filteredNameProducts);
  renderProducts(filteredNameProducts);
  //it logs the correct array into console, but does not render. WHY??????
  // fixed. had wrong parametr in render function
}

function setPrice() {
  productsUL.innerHTML = "";
  let setMaxPrice = document.querySelector("input.max-price").value;
  console.log(setMaxPrice);
  let filteredPrice = availableProducts.filter(
    (product) => product.price <= setMaxPrice
  );
  renderProducts(filteredPrice);
}

function sort() {
  let sortBy = document.getElementById("sort").value;
  console.log(sortBy);
  if (sortBy === "name") {
    productsUL.innerHTML = "";
    let sortedByName = availableProducts.sort(function (a, b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    renderProducts(sortedByName);
  } else if (sortBy === "cheap") {
    productsUL.innerHTML = "";
    let sortedByCheap = availableProducts.sort(function (a, b) {
      return a.price - b.price;
    });
    renderProducts(sortedByCheap);
  } else if (sortBy === "expensive") {
    productsUL.innerHTML = "";
    let sortedByExpensive = availableProducts.sort(function (a, b) {
      return b.price - a.price;
    });
    renderProducts(sortedByExpensive);
  } else if (sortBy === "rating") {
    productsUL.innerHTML = "";
    let sortedByRating = availableProducts.sort(function (a, b) {
      return b.rating - a.rating;
    });
    renderProducts(sortedByRating);
  }
}

function sortByShipping() {
  productsUL.innerHTML = "";

  let shippingCountry = document.getElementById("ships-to").value;
  console.log(shippingCountry);
  let filteredShipping = availableProducts.filter((product) =>
    product.shipsTo.includes(shippingCountry)
  );

  console.log(filteredShipping); // WRONG
  renderProducts(filteredShipping);
}
