let valor; 
let quantidade;
let totalCompra = 0;
let precoDesconto;

function calcularTotal(){
    valor = prompt('Insira o valor do produto: ');
    quantidade = prompt('Digite um número inteiro que informe a quantidade do produto que deseja comprar:')
    totalCompra = valor * quantidade;
    console.log('O valor total da compra é R$ '+totalCompra.toFixed(2));
}

function aplicarDesconto(){
    if (valor > 100){
        precoDesconto = totalCompra - (totalCompra * 0.1);
        console.log('Valor a ser pago pela compra é de R$'+precoDesconto.toFixed(2)+', com desconto de 10%.');
        return precoDesconto;
    } else{
        console.log('O valor a ser pago é R$'+totalCompra.toFixed(2)+', sem aplicação de desconto.');
        return totalCompra;
    }
    
}

function exibirResumo(){
    const valorPago = aplicarDesconto();
    console.log('Resumo da compra');
    console.log('Valor total da compra: R$'+totalCompra.toFixed(2));
    console.log('Valor pago na compra: R$'+valorPago.toFixed(2));
}

calcularTotal();
aplicarDesconto();
exibirResumo();
