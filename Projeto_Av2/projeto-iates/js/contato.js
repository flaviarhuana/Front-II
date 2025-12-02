$(document).ready(function() {
        
    $("#btnEnviar").click(function() {
               
        var nomeDigitado = $("#nome").val();
        var emailDigitado = $("#email").val();
        var mensagemDigitada = $("#mensagem").val();
        
        if (!nomeDigitado || !emailDigitado || !mensagemDigitada) {
            alert("Por favor, preencha todos os campos.");
            return; // Interrompe a função
        }
        
        var mensagem = {
            nome: nomeDigitado,
            email: emailDigitado,
            mensagem: mensagemDigitada
        };
        
        inserirMensagem(mensagem)
            .done(function() {
                
                alert("Mensagem enviada com sucesso!");
                
                // Limpa o formulário após o envio
                $("#nome").val('');
                $("#email").val('');
                $("#mensagem").val('');
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                
                console.error("Erro na Requisição:", textStatus, errorThrown, jqXHR); 
                alert("Erro ao enviar mensagem. Por favor, tente novamente. (Verifique o Console para detalhes)");
            });

    });  
    
});