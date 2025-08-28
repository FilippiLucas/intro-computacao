import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let m:number = 0,
	  c:number = 0,
		i:number = 0,
		t:number = 0;

console.log("Informe o capital inicial: ");
c = kb.questionInt();

console.log("Informe a taxa de juros: ");
i = kb.questionInt() / 100;

console.log("Informe o tempo: ");
t = kb.questionInt();

m = (c * ((1 + i) ** t)).toFixed(2);

console.log(m);
