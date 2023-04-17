//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const pessoa = {
    nome:"Alex",
    age:39,
    sex:"Male",
    height:1.75,
    address: "Rua Nalson Barbosa n2",

    nome1:"Quezia",
    age1:39,
    sex1:"femele",
    height1:1.55,
    address1:"Rua Nalson Barbosa n2 - condominio andorias3"
}

console.log(pessoa.nome == pessoa.nome)
console.log(pessoa.nome == pessoa.nome1)