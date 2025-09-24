let numPares = 0;
let numImpares = 0;

for (let i = 1; i < 11; i++) {
  const numString = prompt('Digite o numero inteiro. Coleta de dados',i, 'de 10.');
  const num = parseInt(numString);

  if (Number.isInteger(num)) {
    if (num % 2 === 0) {
      numPares++;
    } else {
      numImpares++;
    }
  } else {
    console.log('Entrada inválida. Por favor, digite um número inteiro.');
    i--;
  }
}

console.log('Quantidade de números pares: ',numPares);
console.log('Quantidade de números ímpares: ', numImpares);