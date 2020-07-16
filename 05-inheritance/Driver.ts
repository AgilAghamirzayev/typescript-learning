import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(5,10,20);
console.log(myCircle.getInfo());


let myRectange = new Rectangle(0,0,10,15);
console.log(myRectange.getInfo())