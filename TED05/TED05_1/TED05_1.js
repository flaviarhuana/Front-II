let popA = 80000;
let popB = 200000;
const taxaA = 0.03;
const taxaB = 0.015;

let anos = 0;
while (popA < popB) {
    popA = popA * (1 + taxaA);
    popB = popB * (1 + taxaB);
    anos++
}

console.log('A população do país A possui',popA.toFixed(2), 'habitantes.')
console.log('A população do país B possui',popB.toFixed(2), 'habitantes.')
console.log('Após',anos, 'anos, a população de A se tornará maior ou igual a população de B.')