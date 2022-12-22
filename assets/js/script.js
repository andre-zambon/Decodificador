function executa () {
    
    mostraCardErro()
    mostraCardMensagem()
    criptografa()
    
}

function mostraCardErro() {
    
    let mensagemVazia = document.getElementById('mensagem').value;
    if(mensagemVazia =='') {
        document.getElementById('cardErro').style.display='block';
    }else {
        document.getElementById('cardErro').style.display='none';
    }
}

function mostraCardMensagem(){
    let campoMensagemCripto = document.getElementById('mensagemCripto').value;
    
    if (campoMensagemCripto !== ''){
        document.getElementById('cardResultado');
    }
}



function criptografa () {
    
    let mensagemEntrada = document.getElementById('mensagem').value;

    for (let i = 0; i < mensagemEntrada.length; i++) {

        
            .replaceAll('a', 'ai')
            .replaceAll('e', 'enter')
            .replaceAll('i', 'imes')
            .replaceAll('o', 'ober')
            .replaceAll('u', 'ufat');
        }
        
    }
    
    












// function criptografa() {

//     //funciona errado
    
//     let mensagemEntrada = document.getElementById('mensagem').value;
        
//     let mensagemSaida = mensagemEntrada  
//     .replaceAll('a', 'ai')
//     .replaceAll('e', 'enter')
//     .replaceAll('i', 'imes')
//     .replaceAll('o', 'ober')
//     .replaceAll('u', 'ufat');

//     console.log(mensagemSaida)
        
// }    


// let array = mensagemEntrada.split('')
// let reg = /[a&e&i&o&u]/gmi;
// let index = mensagemEntrada.match(reg);



    // for (let i = 0; i < mensagemEntrada.length; i++) {
        //     let letra = mensagemEntrada[i];
        
        //    console.log(letra)
        // }
        
        
        
        
    
        
//     console.log(mensagemEntrada.length)
    
//     // for (let i = 0; i < array.length; i++) {
        
        
    
    //     // }
    
    
    
    
    
    
    
    // for (let i = 0; i < index.length; i++) {
        // if (index[i] == 'a'){
        //     index[i] = 'ai'
        // }
        // if (index[i] == 'e'){
            //     index[i] = 'enter'
            // }
            // if (index[i] == 'i'){
                //     index[i] = 'imes'
                // }
                // if (index[i] == 'o'){
        //     index[i] = 'ober'
        // }
        // if (index[i] == 'u'){
            //     index[i] = 'ufat'
        // }
      
        
    // } 
    
    
    // mensagemSaida = mensagemEntrada.replaceAll("a", "ai");
    
    
    // mensagemCripto.innerHTML = mensagemSaida;
    
    // }
    
    
    
    // function converte () {
        
// }


// A letra "a" é convertida para "ai"
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"