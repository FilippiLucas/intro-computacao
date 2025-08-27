import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let a:number = 0;
let b:number = 0;

console.log("Informe o primeiro numero:");
a = kb.questionInt();

console.log("Informe o segundo numero:");
b = kb.questionInt();

a = a + b;
b = a - b;
a = a - b;
console.log(a + " " + b);
