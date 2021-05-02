// There is a function available to you called moveElement. 
// Calling that function moves an element to a new position and returns a Promise. 
// moveElement takes a DOM element and an object with x and y properties specifying how much to 
// move the element in the x/y directions.
// Note that because the elements start with a random position, 
// it is up to you to calculate how much each element needs to be moved in x/y directions. 
// It then returns a Promise that resolves after the DOM element has been moved.

// Task is to create two functions.
// translateOneByOne - Should translate the circles one at a time from their random start position 
// to their target see the target positions below. Log something out after each element has been moved

// translateAllAtOnce - Should translate all the circles at the same time from their random start position to their target. 
// Log out something after all elements have been moved

// target:
// Red circle target: x: 20px, y: 300px;
// Blue circle target: x: 400px, y: 300px;
// Green circle target: x: 400px, y: 20px;


const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
const boxes = [redBox, blueBox, greenBox];


const redTarget = { x: 20, y: 300};
const blueTarget = { x: 400, y: 300};
const greenTarget = { x: 400, y: 20};

const redPos = { x: redTarget.x - redBox.offsetLeft, y: redTarget.y - redBox.offsetTop};
const bluePos = { x: blueTarget.x - blueBox.offsetLeft, y: blueTarget.y - blueBox.offsetTop};
const greenPos = { x: greenTarget.x - greenBox.offsetLeft, y: greenTarget.y - greenBox.offsetTop};


const translateOneByOne = async () => {
    try {
        await moveElement(redBox, {x: redPos.x, y: redPos.y});
        console.log("Red moved!");
        await moveElement(blueBox, {x: bluePos.x, y: bluePos.y});
        console.log("Blue moved!");
        await moveElement(greenBox, {x: greenPos.x, y: greenPos.y});
        console.log("Green moved!");
    }
    catch (error){
        console.log(error);
    }

}

//translateOneByOne();

const translateAllAtOnce = () => {
    const moveRed = moveElement(redBox, {x: redPos.x, y: redPos.y});
    const moveBlue = moveElement(blueBox, {x: bluePos.x, y: bluePos.y});
    const moveGreen = moveElement(greenBox, {x: greenPos.x, y: greenPos.y});
Promise.all([moveRed, moveBlue, moveGreen])
.then(() => {console.log("Red and blue and green moved!");})
.catch((error) => {console.log(error);})

}
translateAllAtOnce();