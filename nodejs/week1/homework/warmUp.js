// Create a class called Circle. It should have one property called radius.
// The Circle class should have the following methods:
// getDiameter
// getCircumference
// getArea
class Circle {

constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return this.radius * 2;
  }

  getCircumference() {
    return Math.round(2 * Math.PI * this.radius*100) /100;
  }

  getArea() {
    return Math.round(Math.PI * Math.pow(this.radius, 2)*100) /100;
  }
}

// Instantiate a couple of circles and log out their diameter, circumference and area.

const myCircle = new Circle(15);
console.log(myCircle.getDiameter()); 
console.log(myCircle.getCircumference()); 
console.log(myCircle.getArea()); 