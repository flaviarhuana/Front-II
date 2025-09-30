let nomes = ['Alana', 'Breno', 'Carla', 'Daniel', 'Elena'];
console.log(nomes[2]);
nomes.push('Fábio');
nomes.unshift('Gabriela');
nomes.pop();
console.log(nomes);

let numOriginais = [2, 4, 6, 8];
let numDobrados = numOriginais.map(n => n * 2);
console.log(numDobrados);

let maisNumeros = [1, 3, 5, 7, 9];
let maioresQueCinco = maisNumeros.filter(n => n > 5);
console.log(maioresQueCinco);