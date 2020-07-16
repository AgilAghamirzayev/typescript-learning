import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let myShape = new Shape(10, 15);
let myCircle = new Circle(5,10,20);
let myRectange = new Rectangle(0,0,10,15);

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectange);

theShapes.forEach(shape => console.log(shape.getInfo()));