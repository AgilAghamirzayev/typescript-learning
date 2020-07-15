export class Student{

    constructor(private _firstName: string, private _lastName: string, private _age: number){

    }

    
    public get firstName() : string {
        return this._firstName;
    }

    
    public get lastName() : string {
        return this._lastName;
    }

    
    public get age() : number {
        return this._age;
    }
    
    public set firstName(v : string) {
        this._firstName = v;
    }

    
    public set lastName(v : string) {
        this._lastName = v;
    }

    
    public set age(v : number) {
        this._age = v;
    }
    
}