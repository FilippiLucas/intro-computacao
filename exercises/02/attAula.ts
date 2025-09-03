import ReadlineSync from "./readline-sync.ts";

let kb = new ReadlineSync();

let valorLiquido:number = 0,
    percentual:number = 0,
    valorFinal:number = 0;

console.log("Digite o valor desejado para o produto: ");
valorLiquido = kb.questionInt();

console.log("Digite o percentual cobrado pelo veiculo: ");
percentual = kb.questionInt();

valorFinal = valorLiquido + ((valorLiquido * percentual) / (100 - percentual));
console.log(valorFinal);
