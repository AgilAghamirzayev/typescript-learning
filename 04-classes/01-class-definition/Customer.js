var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Aqil", "Aghamirzayev");
// myCustomer.firstName = "Aqil";
// myCustomer.lastName = "Aghamizayev";
console.log(myCustomer.firstName + "  " + myCustomer.lastName);
