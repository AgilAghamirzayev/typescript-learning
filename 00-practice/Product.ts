export class Product{
    constructor(private _name: string, private _price: number){

    }

    
    public get name() : string {
        return this._name;
    }

    
    public get price() : number {
        return this._price;
    }
    
    
}