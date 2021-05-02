fetch('https://yesno.wtf/api/')
    .then(response => response.json())
    .then(yesOrNoData => {
        console.log(yesOrNoData);
        let yesOrNo = document.createElement("h1");
        yesOrNo.innerText = yesOrNoData.answer;
        document.body.appendChild(yesOrNo);
        let yesOrNoImage = document.createElement("img");
        document.body.appendChild(yesOrNoImage);
        yesOrNoImage.setAttribute("id","gif");
        document.getElementById("gif").src = yesOrNoData.image;
    });