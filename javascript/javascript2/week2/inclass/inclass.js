function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}

let newArr = generateListings(20);
//newArr.forEach((element) => console.log(element.size));
let newArrPrices = newArr.map((element) => element.price);
//console.log(newArrPrices);

// Create an array of cheap listings. You define what cheap means. Each item in this array should be of type object
let newArrCheap = newArr.filter((element) => element.price < 2000);
//console.log(newArrCheap);

// Create an array of expensize listings prices. Each item in this array should be of type number

let newArrExpensive = newArr
  .filter((element) => {
    return element.price > 2000;
  })
  .map((element) => element.price);
//console.log(newArrExpensive);

// Create an array of listings that have parking. Each item in this array should be of type object

let newArrParking = newArr.filter((element) =>
  element.facilities.includes("Parkering")
);
//console.log(newArrParking);

//
//Filter listings
// Your job is to create the filterListings function.
//The function should support these filters: type, facilities, price , hasGarden and size. Use arrow functions!

const body = document.querySelector("body");
const button = document.querySelector("button");
button.addEventListener("click", filterListings);

function filterListings(listings, filterObejct) {
  return listings.filter((listing) => listing.type.includes(filterObejct.type));
}

const listings = generateListings(20);

const filter = {
  type: "Farm",
};

const farmListings = filterListings(listings, filter);

console.log(farmListings);

for (let i = 0; i < farmListings.length; i++) {
  let listingHeading = document.createElement("ul");
  listingHeading.innerHTML = `Listing nr ${i + 1}:`;
  body.appendChild(listingHeading);

  // let filteredListing = document.createElement("p");
  // filteredListing.innerHTML = `Type: ${farmListings[i].type} \
  // Facilities: ${farmListings[i].facilities} \
  // Price: ${farmListings[i].price} `;
  // listingHeading.appendChild(filteredListing);

  let type = document.createElement("li");
  type.innerHTML = "Type: " + farmListings[i].type;
  listingHeading.appendChild(type);

  let facilities = document.createElement("li");
  facilities.innerHTML = "Facilities: " + farmListings[i].facilities;
  listingHeading.appendChild(facilities);

  let price = document.createElement("li");
  price.innerHTML = "Price: " + farmListings[i].price;
  listingHeading.appendChild(price);

  let hasGarden = document.createElement("li");
  hasGarden.innerHTML = farmListings[i].hasGarden;
  listingHeading.appendChild(hasGarden);
  //etc
}
