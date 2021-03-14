// z7JV6Nh4HDwegGaxm3Zn65dthkpODSvy

// https://api.giphy.com/v1/gifs/search?api_key=z7JV6Nh4HDwegGaxm3Zn65dthkpODSvy&q=tree&limit=3&offset=0&rating=g&lang=en

// q=tree is the searchword
// limit=3 is the amount of gifs

const triggerSearchButton = document.getElementById("trigger-search-button");
const searchResultsDiv = document.getElementById("search-results-div");
const message = document.createElement("h2");


const fetchGifFunction = (fetchUrl) => {
    let gifAmount = document.getElementById("gif-amount-input").value;
    gifAmount == 0 ? gifAmount = 3 : gifAmount = document.getElementById("gif-amount-input").value;
      
    fetch(fetchUrl)
    .then(response => response.json())
    .then(giphyData => {
        const giphyArray = giphyData.data;
        if (giphyArray.length == 0){
            searchResultsDiv.appendChild(message);
            message.innerText = "huh? try another keyword!";
            fetchURL = buildURL("WHAT");
            fetchGifFunction(fetchURL);
        }
        else {
            for (let i = 1; i <= gifAmount; i++){
                const random = Math.floor(Math.random() * 49) + 1;
                const image = document.createElement("img");
                searchResultsDiv.appendChild(image);
                image.style.width = "40vw";
                image.setAttribute("src", giphyArray[random].images.original.url)
            }
        } 
    });
}
// cannot make sure random number is different everytime

const triggerSearch = () => {
    searchResultsDiv.innerHTML = "";
    const searchKeyword = document.getElementById("gif-keyword-input").value;
    
    if (searchKeyword == ""){
        searchResultsDiv.appendChild(message);
        message.innerText = "what is the keyword tho?";
        fetchURL = buildURL("very-confused");
    }
    else {
        fetchURL = buildURL(searchKeyword);
        triggerSearchButton.innerText = "search again!";
    }
    fetchGifFunction(fetchURL);
  };

  function buildURL(keyword){
     const URL = `https://api.giphy.com/v1/gifs/search?api_key=z7JV6Nh4HDwegGaxm3Zn65dthkpODSvy&q=${keyword}&limit=50&offset=0&rating=g&lang=en`;
     return URL;
  }

  triggerSearchButton.addEventListener("click", triggerSearch);

  fetchGifFunction(buildURL("what-do-you-want"));
  


