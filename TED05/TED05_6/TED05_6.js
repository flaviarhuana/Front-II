function calcMontante(){
    let capInicial = parseFloat(prompt('Informe o capital inicial:'));
    let tempo = parseFloat(prompt('Qual o tempo em meses?'));
    let taxaJuros = parseFloat(prompt('Informe a taxa de juros ao mês, utilizando decimal: '));
    let montante = capInicial * (1 + taxaJuros) ** tempo;

    console.log('O cálculo de montante é igual a :', montante.toFixed(2));
}
console.log(calcMontante());