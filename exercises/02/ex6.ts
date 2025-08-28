import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let n1:number = Math.floor(Math.random() * 1000),
		n2:number = Math.floor(Math.random() * 1000),
		n3:number = Math.floor(Math.random() * 1000),
		n4:number = Math.floor(Math.random() * 1000),
		n5:number = Math.floor(Math.random() * 1000);

let posicoes:number = [n1, n2, n3, n4, n5];

console.log("Primeiro: " + Math.max(...posicoes));
console.log("Ultimo: " + Math.min(...posicoes));
