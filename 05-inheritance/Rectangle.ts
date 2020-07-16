import { Shape } from "./Shape";

export class Rectangle extends Shape {
    

    constructor(theX: number, theY: number, private _width: number, private _lenght: number){

        super(theX, theY);
    }
    
    public get width() : number {
        return this._width;
    }
    
    public set width(v : number) {
        this._width = v;
    }
    
    public get lenght() : number {
        return this._lenght;
    }

    
    public set lenght(v : number) {
        this._lenght = v;
    }
    
    
    getInfo(): string {
        return `${super.getInfo()}, width=${this.width}, lenght=${this.lenght}`
    }
}