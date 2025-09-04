import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

console.log("Informe o valor do produto");
let valor:number = kb.questionFloat();

console.log("Informe a taxa");
let taxa:number = kb.questionFloat() / 100;

let valorFinal:number = valor / (1 - taxa);
console.log(valorFinal.toFixed(2));
