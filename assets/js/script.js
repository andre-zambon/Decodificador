function executa () {

    mostraCards()
    criptografa()
    autoResize()
    escreveMensagemCritpo()

}

function resolve (){
    mostraCards()
    descriptografa()
}

function mostraCards (){
    let mensagemVazia = document.getElementById('mensagem').value;
    let cardMensagemCripto = document.getElementById('cardResultado');
    let cardErro = document.getElementById('cardErro');

    if(mensagemVazia == ''){
        cardErro.style.display='block';
        cardMensagemCripto.style.display='none'
    }
    else if (mensagemVazia !== ''){
        cardErro.style.display='none';
        cardMensagemCripto.style.display='block'
    }
}



function descriptografa (){
    var mensagemEntrada = document.getElementById('mensagem').value
    var campoSaidaMensagem = document.getElementById('mensagemCripto')
   

    var codigo = [['ai', 'a'], ['enter', 'e'], ['imes', 'i'], ['ober', 'o'], ['ufat', 'u']]

    for (let i = 0; i < codigo.length; i++) {
        if (mensagemEntrada.includes(codigo[i][0])){ 
           mensagemEntrada = mensagemEntrada.replaceAll(codigo[i][0], codigo [i][1])

        };
        
        console.log(mensagemEntrada)
        campoSaidaMensagem.innerHTML = mensagemEntrada

    }
}

function criptografa(){
    
    var mensagemEntrada = document.getElementById('mensagem').value
    var arrayEntrada = mensagemEntrada.split(''); //Divide a string em um array
    
    
    arrayEntrada.forEach(function(item, i) { //percorre a array substituindo os valores. parametro item se refere a letra e o parametro i ao indice i
        if(item == "a") {
            arrayEntrada[i] = "ai";
            
        } else if(item == "e") {
            arrayEntrada[i] = "enter";

        } else if(item == "i") {
            arrayEntrada[i] = "imes";
            
        } else if(item == "o") {
            arrayEntrada[i] = "ober";
            
        } else if(item == "u") {
            arrayEntrada[i] = "ufat";
        }
        
        mensagemCripto = arrayEntrada.join('') //Une a array em uma string
        
        return mensagemCripto
    })
    
}

function escreveMensagemCritpo(){
    var campoSaidaMensagem = document.getElementById('mensagemCripto')
    campoSaidaMensagem.innerHTML = mensagemCripto
    
    console.log(mensagemCripto)
}




function autoResize(){
    
    objTextArea = document.getElementById('mensagemCripto');
    while (objTextArea.scrollHeight > objTextArea.offsetHeight)
    {
        objTextArea.rows += 1;
    }
}







// function criptografa () {
//     var campoSaidaMensagem = document.getElementById('mensagemCripto')
//     var mensagemEntrada = document.getElementById('mensagem').value
    
//     .replaceAll('a', 'ai')
//     .replaceAll('e', 'enter')
//     .replaceAll('i', 'imes')
//     .replaceAll('o', 'ober')
//     .replaceAll('u', 'ufat');

//     campoSaidaMensagem.innerHTML = mensagemEntrada
//     console.log(mensagemEntrada)
            
// }
        
function botaoCopiar(){

    var textoCopiado = document.getElementById('mensagemCripto').value;
    navigator.clipboard.writeText(textoCopiado);

}  
    
    
    










