const numeros = [10, 5, 20, 2, 8];

const menor = Math.min(...numeros);
const maior = Math.max(...numeros);

let soma = 0;
for (let i = 0; i < numeros.length; i++){
    soma += numeros[i];
}

console.log('O menor valor é: ',menor);
console.log('O maior valor é: ',maior);
console.log('A soma dos valores é: ',soma);