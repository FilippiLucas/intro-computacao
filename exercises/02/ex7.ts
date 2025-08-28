import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let altura:number = 0;
let distancia:number = 0;
let escada:number = 0;

console.log("Informe a altura do predio: ");
altura = kb.questionInt();

console.log("Informe a distancia da escada: ");
distancia = kb.questionInt();

escada = Math.sqrt((altura ** 2) + (distancia ** 2));
console.log(escada);
