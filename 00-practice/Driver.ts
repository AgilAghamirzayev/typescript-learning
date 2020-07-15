import { Student } from "./Student";

let student = new Student("AQIL","Aghamirayev", 10);

console.log(`${student.firstName}  ${student.lastName}  ${student.age}`);

student.lastName = "Ali";
console.log(`${student.lastName}`);
