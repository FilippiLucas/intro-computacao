import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let n:number = 0;
let cm:number = 0;
let dm:number = 0;
let m:number = 0;
let c:number = 0;
let d:number = 0;
let u:number = 0;
let s:number = 0;
let r:number = 0;

console.log("Informe o numero:");
n = kb.questionInt();

cm = Math.floor(n / 100000);
dm = Math.floor((n / 10000) % 10);
m = Math.floor((n / 1000) % 10);
c = Math.floor((n / 100) % 10);
d = Math.floor((n / 10) % 10);
u = n % 10;

s = cm + (dm * 2) + (m * 3) + (c * 4) + (d * 5) + (u * 6);
r = s % 10;
r = 10 - r;

console.log(n + "-" + r);
console.log(cm+" "+dm+" "+m+" "+c+" "+d+" "+u);
