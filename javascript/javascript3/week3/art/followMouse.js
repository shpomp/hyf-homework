console.log("script loaded");
//https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event

const canvasForMouse = document.getElementById("myMousyCanvas");
const context = canvasForMouse.getContext("2d");
canvasForMouse.width = window.innerWidth;
canvasForMouse.height = window.innerHeight;

const randomNumber = (max) => {
    return Math.floor((Math.random() * max) + 1);
}

const randomColor = () => {
    return `rgb(${randomNumber(255)},${randomNumber(200)+30},${randomNumber(255)})`;
}

class RandomCircleFollowsMouse {
    start = 0 * Math.PI;
    end = 2 * Math.PI;

    constructor(event){
        this.x = event.offsetX + randomNumber(150);
        this.y = event.offsetY + randomNumber(150);
        this.radius = randomNumber(20);
        this.color = randomColor();
    }

    draw (){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, this.start, this.end);
        context.fillStyle = this.color
        context.fill();
        context.strokeStyle = this.color;
        context.stroke();
    }
}

const drawRandomCircle = (event) => {
    const randomCircle = new RandomCircleFollowsMouse(event);
    randomCircle.draw();
}

// event here is needed to later get mouse coordinates and use for offset
canvasForMouse.addEventListener('mousemove', (event) => {
    drawRandomCircle(event);
}
);




