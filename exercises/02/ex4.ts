import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let angulo:number = 0;
const pi = Math.PI;

console.log("Informe o angulo:");
angulo = kb.questionInt();

const anguloReduzido = angulo % 360;
const rad = anguloReduzido * (pi / 180);
const sin:number = Math.sin(rad); 
const tan:number = Math.tan(rad);
const cos:number = Math.cos(rad);

console.log(
	"Angulo Reduzido: " + anguloReduzido + "\n" +
	"Radianos: " + rad + "\n" +
	"Seno: " + sin + "\n" +
	"Coseno: " + cos + "\n" +
	"Tangente: " + tan + "\n"
);
