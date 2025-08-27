import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let n1:number = 0;
let n2:number = 0;
let n3:number = 0;
let n4:number = 0;

console.log("Informe a primeira nota:");
n1 = kb.questionInt();

console.log("Informe a segunda nota:");
n2 = kb.questionInt() * 2;

console.log("Informe a terceira nota:");
n3 = kb.questionInt() * 3;

console.log("Informe a quarta nota:");
n4 = kb.questionInt() * 4;

console.log((n1 + n2 + n3 + n4) / 10);
