let numAula = parseInt(prompt('Digite o número de aulas do semestre: '));
let numFalta = parseInt(prompt('Digite o número de faltas: '));
let p1 = parseFloat(prompt('Nota da primeira prova: '));
let p2 = parseFloat(prompt('Nota da segunda prova: '));
let freq = parseFloat((numAula-numFalta)/numAula*100);
let media = (p1+p2)/2;
let pComplementar = null;
let status;

if (freq < 75) {
    status = 'O discente foi reprovado por falta.';         
} else {
    if (media >= 7){
        status = 'O discente está Aprovado.';             
    } else if (media >= 5){
        pComplementar = parseFloat(prompt('Nota da prova complementar: '));
        let novaMedia = (media + pComplementar)/2;
            if (novaMedia >= 5){
                status = 'Discente Aprovado após a recuperação.';
            } else{
                status = 'Discente Reprovado após recuperação.';
            }
    } else{
        status = 'Discente Reprovado.';
    }
}

console.log('Resultados');
console.log('Número de aulas do semestre foi '+numAula);
console.log('Número de faltas no semestre foi '+numFalta);
console.log('Percentual da frequência do discente é '+freq,'%');
console.log('A primeira nota é '+p1);
console.log('A segunda nota é '+p2);

if (pComplementar == null){
    console.log('Nota complementar não foi aplicada!');
} else{
    console.log('Nota complementar é '+pComplementar);
}
console.log('Situação final: '+status)