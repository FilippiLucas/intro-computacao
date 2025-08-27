import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let salary:number = 0;
let newSalary:number = 0;

console.log("Informe o salario:");
salary = kb.questionInt();

newSalary = salary + (salary * 0.125);
console.log(newSalary);
