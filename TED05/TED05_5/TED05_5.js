function calcCirculo(){
    const raio = parseFloat(prompt('Informe o raio do círculo: '));
    if (raio <= 0){
        console.log(prompt('Informe um valor positivo e maior que zero para o raio!'));
    } else{
        const areaCirculo = 3.14 * raio * raio;
        const comprimento = 2 * 3.14 * raio;
        console.log('A área do círculo é ', areaCirculo.toFixed(2));
        console.log('O comprimento do círculo é ',comprimento.toFixed(2));
    }
}
console.log(calcCirculo())
