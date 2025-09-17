import Produto from './Produto.ts';

let guitarra: Produto = new Produto();

console.log(guitarra.descricao);

guitarra.descricao = "Guitarra";
guitarra.valor = 1800;
console.log("Desc:", guitarra.descricao);
console.log("Valor:", guitarra.valor);

guitarra.valor = -1800;
console.log(guitarra.valor);