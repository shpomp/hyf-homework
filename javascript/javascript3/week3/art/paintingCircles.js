console.log("script loaded");

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Class creation time!
// Create circle class where the constructor should look like this: 
// constructor(x, y, r, startAngle, endAngle, fillColor)
// The circle should have one method: draw that draws the circle to the canvas. 
// That means that creating an instance of the circle class will not draw the circle. 
// Drawing the circle first happens when we call the draw method.


class Circle {
        
    constructor(x,y,radius, start, end,color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.start = start * Math.PI;
        this.end = end * Math.PI;
        this.color = color;
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

const sun = new Circle(350, 350, 100, 0, 12, "yellow");
//sun.draw();



// Every 100ms create a new circle instance and draw that to the canvas.

const randomNumber = (max) => {
    return Math.floor((Math.random() * max) + 1);
}

const randomColor = () => {
    return `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
}

// to stop interval after "repetitions" times
function setIntervalX(action, delay, repetitions) {
    let x = 0;
    const intervalID = window.setInterval(function () {
       action();
       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);
}

class RandomCircle {
    start = 0 * Math.PI;
    end = 2 * Math.PI;

    constructor(){
        this.x = randomNumber(canvas.width);
        this.y = randomNumber(canvas.height);
        this.radius = randomNumber(50);
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

const drawRandomCircle = () => {
    const randomCircle = new RandomCircle();
    randomCircle.draw();
}

setIntervalX(drawRandomCircle, 100, 77);






