import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

const n:number = 0.785;
let altura:number = 0;
let raio:number = 0;

console.log("Informe a altura da piscina: ");
altura = kb.questionInt();

console.log("Informe o raio da piscina: ");
raio = kb.questionInt();

const diametro:number = raio * 2;

console.log("Sera necessario " + Math.ceil((diametro * diametro * altura * n) * 1000) + "Litros");
