let nameHeader = document.createElement("h1");
document.body.appendChild(nameHeader);

const image = document.createElement("img");
document.body.appendChild(image);
image.style.maxWidth = "500px";


/*
    setInterval( () => { 
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(dogData => {
        //console.log(dogData)
            image.setAttribute("src", dogData.message)
        })
    }, 2000);
*/
       
/*  
fetch("https://dog.ceo/api/breeds/list/all")
.then(response => response.json())
.then(dogBreeds =>{
    console.log(dogBreeds)
    const breedNames = Object.keys(dogBreeds.message);
    console.log(breedNames)
    let breedName = breedNames[Math.floor(Math.random() * breedNames.length)]
    console.log(breedName);
    const urlBreedPicture = `https://dog.ceo/api/breed/${breedName}/images/random`;
    let nameHeader = document.createElement("h1");
    document.body.appendChild(nameHeader);
    nameHeader.innerText = breedName;


    fetch(urlBreedPicture)
    .then(response => response.json())
    .then(breedImage =>{
        console.log(breedImage);
        image.setAttribute("src", breedImage.message);
    })
})
*/


/*
setInterval( () => { 
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(dogBreeds =>{
        const breedNames = Object.keys(dogBreeds.message);
        let breedName = breedNames[Math.floor(Math.random() * breedNames.length)]
        const urlBreedPicture = `https://dog.ceo/api/breed/${breedName}/images/random`;
        nameHeader.innerText = breedName;

        fetch(urlBreedPicture)
        .then(response => response.json())
        .then(breedImage =>{
            image.setAttribute("src", breedImage.message);
        })

    })
        
}, 3000);
*/

// at home - make fetch into a function, so you can already have the first picture and don't need to wait 2 seconds in the beginning

const breedAndImage = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(dogBreeds =>{
        const breedNames = Object.keys(dogBreeds.message);
        let breedName = breedNames[Math.floor(Math.random() * breedNames.length)]
        const urlBreedPicture = `https://dog.ceo/api/breed/${breedName}/images/random`;
        nameHeader.innerText = breedName;

        fetch(urlBreedPicture)
        .then(response => response.json())
        .then(breedImage =>{
            image.setAttribute("src", breedImage.message);
        })

    })
}

breedAndImage();
setInterval(breedAndImage,2000);