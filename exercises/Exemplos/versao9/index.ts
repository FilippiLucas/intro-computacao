import Produto from './Produto.ts';

let guitarra: Produto = new Produto();

console.log("Descricao: ", guitarra.getDescricao());
console.log("Valor: ", guitarra.getValor());

guitarra.setValor(1000);
console.log(guitarra.getDescricao());

console.log(guitarra.calculaDesconto());
console.log(guitarra.calculaParcela(5));