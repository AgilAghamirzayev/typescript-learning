class Customer {
    firstName: string;
    lastName: string;
    
    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }

}


let myCustomer = new Customer("Aqil", "Aghamirzayev");

// myCustomer.firstName = "Aqil";
// myCustomer.lastName = "Aghamizayev";

console.log(`${myCustomer.firstName}  ${myCustomer.lastName}`);