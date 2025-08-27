import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let percentage:number = 0;
let pagesRead:number = 0;
let pagesTotal:number = 0;

console.log("Informe o numero total de paginas:");
pagesTotal = kb.questionInt();

console.log("Informe o numero de paginas lidas:");
pagesRead = kb.questionInt();

percentage = (pagesRead * 100) / pagesTotal;
console.log(percentage + "%");
