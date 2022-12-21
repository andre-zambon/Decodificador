

function criptografa() {
    
    let mensagemEntrada = document.getElementById('mensagem').value;
    // let array = mensagemEntrada.split('')
    let reg = /[a&e&i&o&u]/gmi;
    let index = mensagemEntrada.match(reg);
    
    console.log(index)
    
    // for (let i = 0; i < array.length; i++) {
        
        
        
    // }
    
    
    
    
    
    
    
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
    
    // mensagemSaida = mensagemEntrada.replaceAll("e", "enter");
    // mensagemSaida = mensagemEntrada.replaceAll("i", "imes");
    // mensagemSaida = mensagemEntrada.replaceAll("o", "ober");
    // mensagemSaida = mensagemEntrada.replaceAll("u", "ufat");

    // mensagemCripto.innerHTML = mensagemSaida;
    
}


const criptografia = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
};

function converte () {
    
}


// A letra "a" é convertida para "ai"
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"