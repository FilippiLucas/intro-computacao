import Produto from './Produto.ts';

let guitarra: Produto = new Produto();

console.log(guitarra.descricao);

guitarra.descricao = "Guitarra";
console.log("Desc:", guitarra.descricao);
