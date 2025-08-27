import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let ml:number = 0;
let drops:number = 0;

console.log("Informe quantidade de gotas:");
ml = kb.questionInt();

drops = ml * 0.05;

console.log(drops + "mls")




