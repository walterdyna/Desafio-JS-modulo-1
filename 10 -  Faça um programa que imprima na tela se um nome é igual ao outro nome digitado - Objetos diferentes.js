// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const pessoa1 = {
    nome:"Alex",
    age:39,
    sex:"Male",
    height:1.75,
    address: "Rua Nalson Barbosa n2"
}

const pessoa2 = {
    nome:"Quezia",
    age:39,
    sex:"femele",
    height:1.55,
    address:"Rua Nalson Barbosa n2 - condominio andorias3"
}

const pessoa3 = {
    nome:"Lorena",
    age:8,
    sex:"femele",
    height:1.25,
    address:"Rua Nalson Barbosa n2 - condominio andorias3 - bl11 - Apt101"
}

const pessoa4 = {
    nome:"Amelia",
    age:63,
    sex:"femele",
    height:1.60,
    address:"3 º etapa"
}

const pessoa5 = {
    nome:"Maria Eduarda",
    age:12,
    sex:"femele",
    height:1.60,
    address:"3 º etapa - Edf: Camelia"
}

const pessoa6 = {
    nome:"João",
    age:5,
    sex:"Male",
    height:1.10,
    address:"3 º etapa - Edf: Camelia - apt 101"
}

const pessoa7 = {
    nome:"Dudu",
    age:23,
    sex:"Male",
    height:1.70,
    address:"3 º etapa - Edf: Camelia - apt 101 - b11",

    nome2:"Luiza",
    age2:23,
    sex2:"Male",
    height2:1.77,
    address2:"3 º etapa - Edf: Camelia - apt 101 - b11 - so que nao"
}

console.log(pessoa1 == pessoa2)
console.log(pessoa1 == pessoa1)

console.log("-------------")
console.log("-------------")

console.log(pessoa1 !== pessoa2)
console.log(pessoa1 !== pessoa1)

console.log("-------------")
console.log("-------------")

console.log(pessoa7.nome == pessoa7.nome2)
console.log(pessoa7.nome2 == pessoa7.nome2)

console.log("-------------")
console.log("-------------")

console.log(pessoa7.nome !== pessoa7.nome2)
console.log(pessoa7.nome2 !== pessoa7.nome2)



