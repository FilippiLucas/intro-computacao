import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

const notas:number = [100, 50, 20, 10, 5, 2, 1];
let valor:number = 0;

console.log("Informe o valor do saque:");
valor = kb.questionInt();

const n100:number = Math.floor(valor / notas[0]);
valor = valor % notas[0];

const n50:number = Math.floor(valor / notas[1]);
valor = valor % notas[1];

const n20:number = Math.floor(valor / notas[2]);
valor = valor % notas[2];

const n10:number = Math.floor(valor / notas[3]);
valor = valor % notas[3];

const n5:number = Math.floor(valor / notas[4]);
valor = valor % notas[4];

const n2:number = Math.floor(valor / notas[5]);
valor = valor % notas[5];

const n1:number = Math.floor(valor / notas[6]);
valor = valor % notas[6];

console.log(
	"100: " + n100 + "\n" +
	"50: " + n50 + "\n" +
	"20: " + n20 + "\n" +
	"10: " + n10 + "\n" +
	"5: " + n5 + "\n" +
	"2: " + n2 + "\n" +
	"1: " + n1 + "\n"
);
