import { Student } from "./Student";
import { Account } from "./Account";
import { Product } from "./Product";

let account = new Account("aqilzeka99@gmail.com", "12345");

let student = new Student("AQIL","Aghamirayev", 10);

let product1 = new Product("Phone", 611.2);
let product2 = new Product("Laptop", 2121) 

if(account.email == "aqilzeka99@gmail.com" && account.password == "12345") {
    console.log(`Welcome ${student.firstName} !!!`);
    console.log(`You have 2 products :`);
    console.log(`1-st: name: ${product1.name} price: ${product1.price}`);
    console.log(`2-st: name: ${product2.name} price: ${product2.price}`);

    console.log('------------------->   About yourself  <--------------------')
    console.log(`${student.firstName}  ${student.lastName}  ${student.age}`);

} else {
    console.log('Your password and email is not password!!!');

}

