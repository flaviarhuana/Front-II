$(document).ready(function() {
        
    $("#btnLogin").click(function() {
        
        
        var email = $("#email-login").val();
        var senha = $("#senha-login").val();
        
        var objLoginSenha = {
            email: email,
            senha: senha
        };
                
        var usuarioValido = validarUsuario(objLoginSenha);         
        
        if (usuarioValido) {            
            window.location.href = 'mensagens.html';
        } else {
            alert("E-mail e Senha inválidos");
            
            $("#senha-login").val('');
        }
    });
});