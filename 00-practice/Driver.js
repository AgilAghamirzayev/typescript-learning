"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var Account_1 = require("./Account");
var Product_1 = require("./Product");
var account = new Account_1.Account("aqilzeka99@gmail.com", "12345");
var student = new Student_1.Student("AQIL", "Aghamirayev", 10);
var product1 = new Product_1.Product("Phone", 611.2);
var product2 = new Product_1.Product("Laptop", 2121);
if (account.email == "aqilzeka99@gmail.com" && account.password == "12345") {
    console.log("Welcome " + student.firstName + " !!!");
    console.log("You have 2 products :");
    console.log("1-st: name: " + product1.name + " price: " + product1.price);
    console.log("2-st: name: " + product2.name + " price: " + product2.price);
    console.log('------------------->   About yourself  <--------------------');
    console.log(student.firstName + "  " + student.lastName + "  " + student.age);
}
else {
    console.log('Your password and email is not password!!!');
}
