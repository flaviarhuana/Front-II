const STORAGE_KEY = 'mensagensData';

// ==========================================================
// 1. FUNÇÕES GLOBAIS (Acessíveis pelo onclick do HTML)
// ==========================================================

function marcarVisualizada(idMensagem) {
    // 1. Obrigatoriamente: Solicitar confirmação
    if (!confirm("Tem certeza que deseja marcar esta mensagem como visualizada?")) {
        return; // Sai se o usuário cancelar
    }

    // 2. Lógica para Local Storage e remoção do negrito
    var mensagens = obterMensagensLocal();
    var index = mensagens.findIndex(m => m.id == idMensagem);

    if (index !== -1) {
        mensagens[index].visualizada = true;
        salvarMensagensLocal(mensagens); // Salva a lista atualizada
    }
    
    // Remove a classe 'nao-visualizada' da linha e da célula da mensagem
    $(`#msg-${idMensagem}`).removeClass('nao-visualizada');
    $(`#msg-${idMensagem} td`).removeClass('nao-visualizada');
}


function excluirMensagem(idMensagem) {
    // 1. Obrigatoriamente: Solicitar confirmação
    if (!confirm("Tem certeza que deseja excluir esta mensagem?")) {
        return; // Sai se o usuário cancelar
    }

    // 2. Lógica para Local Storage e remoção da linha
    var mensagens = obterMensagensLocal();
    var mensagensAtualizadas = mensagens.filter(m => m.id != idMensagem);
    salvarMensagensLocal(mensagensAtualizadas);
    
    // Remove a linha da tabela (atualização visual)
    $(`#msg-${idMensagem}`).remove();
}


// ==========================================================
// 2. FUNÇÕES DE CARREGAMENTO E AUXILIARES
// ==========================================================

$(document).ready(function() {
    carregarMensagens();
});

function carregarMensagens() {
    var mensagensApi = obterMensagens(); 
    var mensagensLocal = obterMensagensLocal(); 

    var listaFinal = processarMensagens(mensagensApi, mensagensLocal);

    salvarMensagensLocal(listaFinal);
    renderizarTabela(listaFinal);
}

function obterMensagensLocal() {
    var data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function salvarMensagensLocal(mensagens) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mensagens));
}

function processarMensagens(mensagensApi, mensagensLocal) {
    return mensagensApi.map(msgApi => {
        var msgLocal = mensagensLocal.find(m => m.id === msgApi.id);

        return {
            ...msgApi,
            visualizada: msgLocal ? msgLocal.visualizada : false 
        };
    });
}

function renderizarTabela(mensagens) {
    var $tbody = $("#tabelaMensagens tbody");
    $tbody.empty(); 

    mensagens.forEach(msg => {
        var classe = msg.visualizada ? '' : 'nao-visualizada';
        
        var $linha = $(`<tr id="msg-${msg.id}" class="${classe}">`);
        
        $linha.append(`<td>${msg.nome}</td>`);
        $linha.append(`<td>${msg.email}</td>`);
        $linha.append(`<td class="${classe}">${msg.mensagem}</td>`); 

        var $acoes = $(`<td>`);
        
        // As chamadas ONCLICK estão CORRETAS
        $acoes.append(`<button class="btn-acao btn-visualizar" onclick="marcarVisualizada('${msg.id}')">Mensagem Visualizada</button> `);
        $acoes.append(`<button class="btn-acao btn-excluir" onclick="excluirMensagem('${msg.id}')">Excluir Mensagem</button>`);
        
        $linha.append($acoes);
        $tbody.append($linha);
    });
}