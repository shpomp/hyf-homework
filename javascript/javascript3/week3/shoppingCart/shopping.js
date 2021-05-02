console.log("script!");

const h1 = document.querySelector("h1");
const table = document.querySelector("table");
const productTableHeader = document.getElementById("product");
const priceTableHeader = document.getElementById("price");


class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }

    convertToCurrency(currency){
      fetch('https://api.exchangeratesapi.io/latest?base=DKK')
     .then( response => response.json())
     .then( currencyRatesData =>{
       if (!isNaN(currencyRatesData.rates[currency])){
        console.log(`Price in ${currency.toUpperCase()} = ${(currencyRatesData.rates[currency]*this.price).toFixed(2)}`);
       }
       else {
         console.log("Currency not found!");
       }
      })
     .catch((error)=>
     console.log(error))
    }
  
  }
  
  class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
        this.products.push(product);
    }
  
    removeProduct(product) {
        this.products = this.products.filter(arrayProduct => arrayProduct.name != product.name);
        return this.products;
    }
  
    //searchProduct should return an array of product that match the productName parameter
    searchProduct(productName) {
      const foundProducts = this.products.filter(
          (arrayProduct) => (arrayProduct.name).toLowerCase().includes(productName.toLowerCase()));
          return foundProducts;
    }
  
    // getTotal should get the total price of the products in the shoppingcart.
    getTotal() {
      const total = this.products.map(product => product.price).reduce((sum, value) => sum + value, 0);
      return total;
    }
  
    renderProducts(shoppingCart) {
        this.products.forEach((product) => {
          const tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price} DKK</td>`
            table.appendChild(tr);
          })
          const trTotal = document.createElement("tr");
          trTotal.innerHTML = `
          <td>TOTAL</strong></td>
          <td>${shoppingCart.getTotal()} DKK</td>`
          table.appendChild(trTotal);
    }
  
    async getUser(shoppingCart) {
      return new Promise((resolve, reject) => {
          fetch(`https://jsonplaceholder.typicode.com/users/${Math.floor((Math.random() * 10) + 1)}`)
            .then(response => response.json())
            .then(userData => {
              resolve(userData.name)
              //console.log(userData);
              h1.innerText = userData.name;
              productTableHeader.innerText = "PRODUCT";
              priceTableHeader.innerText = "PRICE";
              shoppingCart.renderProducts(shoppingCart);
            })
        })
      }

      
  } // shopping cart class ends

  // SHOPPING START

const shoppingCart = new ShoppingCart();

const bike = new Product("bike", 1000);
shoppingCart.addProduct(bike);

const helmet = new Product("helmet", 130);
shoppingCart.addProduct(helmet);

const frontLamp = new Product("front-lamp", 50);
shoppingCart.addProduct(frontLamp);

const rearLamp = new Product("rear-lamp", 70);
shoppingCart.addProduct(rearLamp);

const shifter = new Product("shifter", 2700);
shoppingCart.addProduct(shifter);

const tires = new Product("tires", 900);
shoppingCart.addProduct(tires);

const iDontNeedThis = new Product("nonsense", 3);
shoppingCart.addProduct(iDontNeedThis);

shoppingCart.getUser(shoppingCart);


// TEST 
// console.log(shoppingCart.products);
shoppingCart.removeProduct(iDontNeedThis)
// console.log(shoppingCart.products);
// console.log(shoppingCart.searchProduct("helmet"));
// console.log(shoppingCart.getTotal());
// TEST end

// PART 2 +

// optional 
// Create a searchbar where a user can search for a product. 
// Matching product are shown as an autocomplete. 
// Clicking a product in the autocomplete opens a modal with product information.
// tried autocomplete.js from W3

// PART 3
// The Product class should get a method called convertToCurrency. 
// The function should have currency as a parameter. 
// Depending on the provided currency return the correct price for the product. 
// Add 3 or more curriencies. Or use an api for getting the price dependent on a currency that convertToCurrency uses.

const plant = new Product("plant", 50);
plant.convertToCurrency("EUR");
plant.convertToCurrency("sdf");



