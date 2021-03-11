
const astronautsData = fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(astronautsData => {
        console.log(astronautsData);
        //return astronautsData;

const numberOfAstronauts = astronautsData.people.length;
const astronautList = astronautsData.people;
const listHeader = document.createElement("ol");
listHeader.innerText = `There are ${numberOfAstronauts} astronauts in space, they are:`
document.body.appendChild(listHeader);
astronautList.forEach(element => {
    let name = element.name;
    let listItem = document.createElement("li");
    listItem.innerText = name;
    listHeader.appendChild(listItem);

});
    });

// const numberOfAstronauts = astronautsData.people.length;
// const listHeader = document.createElement("h3");
// listHeader.innerText = `There are ${numberOfAstronauts} astronauts in space, they are;`
