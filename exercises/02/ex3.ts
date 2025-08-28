import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

const notas:number = [10000, 5000, 2000, 1000, 500, 200, 100];
const moedas:number = [50, 25, 10, 5, 1];
let valor:number = 0.00;

console.log("Informe o valor do saque:");
valor = (kb.questionFloat()) * 100;

console.log(valor);

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

const m50:number = Math.floor(valor / moedas[0]);
valor = valor % moedas[0];

const m25:number = Math.floor(valor / moedas[1]);
valor = valor % moedas[1];

const m10:number = Math.floor(valor / moedas[2]);
valor = valor % moedas[2];

const m5:number = Math.floor(valor / moedas[3]);
valor = valor % moedas[3];

const m1:number = Math.floor(valor / moedas[4]);
valor = valor % moedas[4];

console.log(
	"100: " + n100 + "\n" +
	"50: " + n50 + "\n" +
	"20: " + n20 + "\n" +
	"10: " + n10 + "\n" +
	"5: " + n5 + "\n" +
	"2: " + n2 + "\n" +
	"1: " + n1 + "\n" +
	"0.50: " + m50 + "\n" +
	"0.25: " + m25 + "\n" +
	"0.10: " + m10 + "\n" +
	"0.5: " + m5 + "\n" +
	"0.1: " + m1 + "\n"
);
