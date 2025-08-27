import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let n:number = 0;
let m:number = 0;
let c:number = 0;
let d:number = 0;
let u:number = 0;

console.log("Informe um numero:");
n = kb.questionInt();

m = Math.floor(n / 1000);
c = Math.floor((n / 100) % 10);
d = Math.floor((n / 10) % 10);
u = n % 10;

console.log("M:" + m + " C:" + c + " D:" + d + " U:" + u);
