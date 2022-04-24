import readline from 'readline/promises'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const numero1 = await rl.question("digite o primeiro numero: ")
const numero2 = await rl.question("digite o segundo numero: ")

const soma = parseInt(numero1, 10) + parseInt(numero2, 10)

console.log('a soma dos dois numeros = ', soma)