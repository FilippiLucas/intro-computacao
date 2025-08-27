import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let classes:number = 0;
let hours:number = 0;

console.log("Informe a quantidade de aulas")
classes = kb.questionInt();

hours = (classes * 50) / 60;
console.log(hours);
