import Produto from './Produto.ts';

let guitarra: Produto = new Produto();

console.log("Descricao: ", guitarra.getDescricao());
console.log("Valor: ", guitarra.getValor());

guitarra.setDescricao("Batata");
console.log(guitarra.getDescricao());