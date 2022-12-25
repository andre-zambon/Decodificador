var campoMensagem = document.getElementById('mensagem');

function aplicaCodigo () {
    
    campoMensagem.value
    .replaceAll(/e/gm, 'enter')
    .replaceAll(/i/gm, 'imes')
    .replaceAll(/a/gm, 'ai')
    .replaceAll(/o/gm, 'ober')
    .replaceAll(/u/gm, 'ufat');
    
    let mensagemSaida = campoMensagem.value
    console.log(mensagemSaida);
      
    return mensagemSaida;
    
}

function escreveMensagemCritpo(){
    var campoSaidaMensagem = document.getElementById('mensagemCripto');
    campoSaidaMensagem.innerHTML = aplicaCodigo();
    
}

function mostraCards (){
    var cardMensagemCripto = document.getElementById('cardResultado');
    var cardErro = document.getElementById('cardErro');

    if(campoMensagem == ''){
        cardErro.style.display='block';
        cardMensagemCripto.style.display='none'
    }
    else if (campoMensagem !== ''){
        cardErro.style.display='none';
        cardMensagemCripto.style.display='block'
    }
}

function codifica () {

    aplicaCodigo()
    escreveMensagemCritpo()
    mostraCards()
    autoResize()

}

function decodifica (){
    mostraCards()
    escreveMensagemDescripto ()
    autoResize()
}






function retiraCodigo (){
    
    var campoMensagem = document.getElementById('mensagem').value
   
    
    .replaceAll(/ai/gmi, 'a')
    .replaceAll(/enter/gmi, 'e')
    .replaceAll(/imes/gmi, 'i')
    .replaceAll(/ober/gmi, 'o')
    .replaceAll(/ufat/gmi, 'u');
    
    
    console.log(campoMensagem)
    return campoMensagem 
    
}

function escreveMensagemDescripto (){
    var campoSaidaMensagem = document.getElementById('mensagemCripto');
    campoSaidaMensagem.innerHTML = retiraCodigo();
    
}




function botaoCopiar(){
    
    var textoCopiado = document.getElementById('mensagemCripto').value;
    navigator.clipboard.writeText(textoCopiado);
    
}  
    
function autoResize(){
    
    objTextArea = document.getElementById('mensagemCripto');
    while (objTextArea.scrollHeight > objTextArea.offsetHeight)
    {
        objTextArea.rows += 1;
    }
}














// Código funcionando

// function codifica () {

//     mostraCards()
//     aplicaCodigo()
//     escreveMensagemCritpo()
//     autoResize()

// }

// function decodifica (){
//     mostraCards()
//     escreveMensagemDescripto ()
// }


// function mostraCards (){
//     var mensagemVazia = document.getElementById('mensagem').value;
//     var cardMensagemCripto = document.getElementById('cardResultado');
//     var cardErro = document.getElementById('cardErro');

//     if(mensagemVazia == ''){
//         cardErro.style.display='block';
//         cardMensagemCripto.style.display='none'
//     }
//     else if (mensagemVazia !== ''){
//         cardErro.style.display='none';
//         cardMensagemCripto.style.display='block'
//     }
// }

// function aplicaCodigo () {
    
//     var mensagemEntradaLimpa = document.getElementById('mensagem').value
    
//     .replaceAll(/e/gm, 'enter')
//     .replaceAll(/i/gm, 'imes')
//     .replaceAll(/a/gm, 'ai')
//     .replaceAll(/o/gm, 'ober')
//     .replaceAll(/u/gm, 'ufat');
    
    
//     console.log(mensagemEntradaLimpa);
      
//     return mensagemEntradaLimpa;
    
// }


// function escreveMensagemCritpo(){
//     var campoSaidaMensagem = document.getElementById('mensagemCripto');
//     campoSaidaMensagem.innerHTML = aplicaCodigo();
    
// }

// function retiraCodigo (){
    
//     var mensagemEntradaSuja = document.getElementById('mensagem').value
   
    
//     .replaceAll(/ai/gmi, 'a')
//     .replaceAll(/enter/gmi, 'e')
//     .replaceAll(/imes/gmi, 'i')
//     .replaceAll(/ober/gmi, 'o')
//     .replaceAll(/ufat/gmi, 'u');
    
    
//     console.log(mensagemEntradaSuja)
//     return mensagemEntradaSuja 
    
// }

// function escreveMensagemDescripto (){
//     var campoSaidaMensagem = document.getElementById('mensagemCripto');
//     campoSaidaMensagem.innerHTML = retiraCodigo();
    
// }


// function botaoCopiar(){
    
//     var textoCopiado = document.getElementById('mensagemCripto').value;
//     navigator.clipboard.writeText(textoCopiado);
    
// }  
    
// function autoResize(){
    
//     objTextArea = document.getElementById('mensagemCripto');
//     while (objTextArea.scrollHeight > objTextArea.offsetHeight)
//     {
//         objTextArea.rows += 1;
//     }
// }

    
// outra maneira de fazer


// function descriptografa (){
//     var mensagemEntrada = document.getElementById('mensagem').value
//     var campoSaidaMensagem = document.getElementById('mensagemCripto')
   

//     var codigo = [['ai', 'a'], ['enter', 'e'], ['imes', 'i'], ['ober', 'o'], ['ufat', 'u']]

//     for (let i = 0; i < codigo.length; i++) {
//         if (mensagemEntrada.includes(codigo[i][0])){ 
//            mensagemEntrada = mensagemEntrada.replaceAll(codigo[i][0], codigo [i][1])

//         };
        
//         console.log(mensagemEntrada)
//         campoSaidaMensagem.innerHTML = mensagemEntrada

//     }
// }

// function criptografa(){
    
//     var mensagemEntrada = document.getElementById('mensagem').value
//     var arrayEntrada = mensagemEntrada.split(''); //Divide a string em um array
    
    
//     arrayEntrada.forEach(function(item, i) { //percorre a array substituindo os valores. parametro item se refere a letra e o parametro i ao indice i
//         if(item == "a") {
//             arrayEntrada[i] = "ai";
            
//         } else if(item == "e") {
//             arrayEntrada[i] = "enter";

//         } else if(item == "i") {
//             arrayEntrada[i] = "imes";
            
//         } else if(item == "o") {
//             arrayEntrada[i] = "ober";
            
//         } else if(item == "u") {
//             arrayEntrada[i] = "ufat";
//         }
        
//         mensagemCripto = arrayEntrada.join('') //Une a array em uma string
        
//         return mensagemCripto
//     })
    
// }









