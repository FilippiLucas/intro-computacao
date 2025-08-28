 import ReadlineSync from "./readline-sync.ts";

 let kb = new ReadlineSync();

 const soda:number = 300;
 let people:number = 0;
 let total:number = 0;

 console.log("Informe a quantidade de pessoas");
 people = kb.questionInt();

 total = Math.round((people * soda) / 2000);
 console.log(total);
