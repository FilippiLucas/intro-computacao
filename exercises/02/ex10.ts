import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let distancia:number = 0;
let tempo:number = 0;

console.log("Informe a distancia: ");
distancia = kb.questionInt();

console.log("Informe o tempo: ");
tempo = kb.questionInt();

if(tempo === 0) {
	console.log("O tempo não pode ser zero. Dividir por zero não é matematicamente válido.");
};

console.log("Velocidade Media: " + distancia / tempo);
