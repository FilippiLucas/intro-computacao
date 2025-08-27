import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let n:number = 0;
let nSquared:number = 0;

console.log("Informe o numero:");
n = kb.questionInt();

nSquared = n * n;
console.log(nSquared);
