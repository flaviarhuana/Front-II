let salario = 1000;
let porcAumento = 0.0015;
let anoAtual = 2025;

for (let ano = 1996; ano <= anoAtual; ano++){
    salario += salario * porcAumento;
    if (ano >= 1997){
        porcAumento *= 2;
    }
}
console.log('O salário em',anoAtual, 'é de R$',salario.toFixed(2));

function calcSalario(){
    let salario1 = parseFloat(prompt('Digite o salário inicial: '));
    let porcAumento = 0.0015;
    let anoAtual = 2025;
    for (let ano = 1996; ano <= anoAtual; ano++){
    salario1 += salario1 * porcAumento;
        if (ano >= 1997){
            porcAumento *= 2;
        }
    }
    console.log('O salário em',anoAtual, 'é de R$',salario1);
}
console.log(calcSalario().toFixed(2));