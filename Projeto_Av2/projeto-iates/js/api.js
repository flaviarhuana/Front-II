const URL_BASE = 'https://app-p2-js-c88e9128234a.herokuapp.com';

/**
 * Insere uma nova mensagem no servidor.
 * * NOTA: Esta função retorna o objeto Deferred do jQuery para permitir o uso de .done() e .fail()
 * no código de contato.
 * * @param {object} mensagem Objeto contendo nome, email e mensagem.
 * @returns {object} Objeto Deferred do jQuery.
 */
function inserirMensagem(mensagem) {
    const url = URL_BASE + '/mensagens'; 
    
    return $.ajax({
        url: url,
        method: 'POST',
        contentType: 'application/json',
        
        dataType: 'text', 
        
        data: JSON.stringify(mensagem),
        
    });
}

/**
 * Obtém a lista de mensagens do servidor.
 * Esta função usa chamadas síncronas (async: false), o que não é ideal, 
 * mas é mantido para compatibilidade com o padrão de código existente.
 * * @returns {Array} Array de objetos de mensagem.
 */
function obterMensagens() {

    var retorno = [];
    
    var consulta = $.ajax({
        url: URL_BASE + '/mensagens', 
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function(xhr, status, error){
        console.error("Erro ao obter mensagens:", status, error);
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });

    return retorno;
}

/**
 * Valida as credenciais de usuário no servidor.
 * Esta função usa chamadas síncronas (async: false), o que não é ideal, 
 * mas é mantido para compatibilidade com o padrão de código existente.
 * * @param {object} objLoginSenha Objeto contendo email e senha.
 * @returns {boolean} Retorna true se o login for válido, false caso contrário.
 */
function validarUsuario(objLoginSenha) {

    var retorno = false;

    var validacao = $.ajax({
        url: URL_BASE + '/usuarios/validar', // Usa a URL_BASE definida
        method: 'POST',
        dataType: 'json',
        async: false,
                
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    }).fail(function(xhr, status, error){
        console.error("Erro na validação do usuário:", status, error);
        return retorno;
    });

    validacao.done(function(data) {
        retorno = data; 
    });

    return retorno;
}

/**
 * Marca uma mensagem como visualizada no servidor.
 * * @param {string} id O ID da mensagem a ser marcada.
 * @returns {object} Objeto Deferred do jQuery.
 */
function marcarVisualizada(id) {
    const url = URL_BASE + '/mensagens/visualizada/' + id;

    return $.ajax({
        url: url,
        method: 'PUT',
        
        
        dataType: 'text' 
    });
}

/**
 * Exclui uma mensagem do servidor.
 * * @param {string} id O ID da mensagem a ser excluída.
 * @returns {object} Objeto Deferred do jQuery.
 */
function excluirMensagem(id) {
    const url = URL_BASE + '/mensagens/' + id;
    
    return $.ajax({
        url: url,
        method: 'DELETE',
                
        dataType: 'text' 
    });
}