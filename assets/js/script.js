var inputMensagem = document.getElementById('mensagem');
var outputMensagem = document.getElementById('mensagemCripto');
var botaoCodifica = document.getElementById('botaoCodifica')
var botaoDecodifica = document.getElementById('botaoDecodifica')

botaoCodifica.addEventListener('click', () => {
    outputMensagem.innerHTML = aplicaCodigo();
    mostraCards();
});

botaoDecodifica.addEventListener('click', () => {
    outputMensagem.innerHTML = retiraCodigo();
    mostraCards();
});

function aplicaCodigo () {
    var mensagem = inputMensagem.value
    .replaceAll(/e/gm, 'enter')
    .replaceAll(/i/gm, 'imes')
    .replaceAll(/a/gm, 'ai')
    .replaceAll(/o/gm, 'ober')
    .replaceAll(/u/gm, 'ufat');
    
    return mensagem;
}

function retiraCodigo (){
    var mensagem = inputMensagem.value
    .replaceAll(/ai/gmi, 'a')
    .replaceAll(/enter/gmi, 'e')
    .replaceAll(/imes/gmi, 'i')
    .replaceAll(/ober/gmi, 'o')
    .replaceAll(/ufat/gmi, 'u');
    
    return mensagem 
}

function mostraCards (){
    var cardMensagemCripto = document.getElementById('cardResultado');
    var cardErro = document.getElementById('cardErro');
    
    if(inputMensagem.value == ''){
        cardErro.style.display='flex';
        cardMensagemCripto.style.display='none'
    }
    else if (inputMensagem.value !== ''){
        cardErro.style.display='none';
        cardMensagemCripto.style.display='flex'
    }
}

function botaoCopiar(){
    var textoCopiado = document.getElementById('mensagemCripto').value;
    navigator.clipboard.writeText(textoCopiado);
}  
