<!-----go to src>> components then paste ---->

<!---Circle.js --->
  // import using require

// declare class
var Shape = require('./shape.js');
// declare class
class Circle extends Shape {
     constructor(color) {
          super();
     }
     calculateArea() {

     }
}

// export class using module.exports
module.exports = Circle;



<!----- Shape.js ----->
// declare class
class Shape {
     constructor() {
          this.color = "green";
     }
     drawShape() {

     }
     calculateArea() {

     }
}

// export class using module.exports
module.exports = Shape;
