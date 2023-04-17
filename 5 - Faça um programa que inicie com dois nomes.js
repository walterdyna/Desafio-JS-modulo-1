// [ ] Faça um programa que inicie com dois nomes, e o programa imprima na tela o seguinte dado: Olá, meu nome é (nome 1) e meu partner do CodeClub é (nome2)


let nome1 = "Alex"
let nome2 = "Quezia"

let complemento1 = "Ola Meu nome e "
let complemento2 = " e Meu partner do CodeClub e "

const namesEPartner = "Ola Meu nome e Alex e meu Partner do CodeClub e Quezia"

//----------OU usar o templet String-------------

const nome01 =`Alex` // usar CRASE
const nome02 = `Quezia`

const names = `Ola Meu nome e ${nome01} e meu Partner do CodeClub e ${nome02}` // templet String

console.log("Ola Meu nome e " + nome1 + " e Meu partner do CodeClub e " + nome2)

console.log(complemento1 + nome1 + complemento2 + nome2)

console.log(namesEPartner)

console.log("--------------------------")

console.log(names)


