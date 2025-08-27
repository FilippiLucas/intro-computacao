import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let price:number = 0;
let newPrice:number = 0;

console.log("Informe o preco do produto:");
price = kb.questionInt();

newPrice = price - (price * 0.35);
console.log(newPrice);
