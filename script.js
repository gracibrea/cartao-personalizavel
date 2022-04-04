let nome = prompt('Digite o nome da aniversariante');
let niver = prompt('Digite a data do aniversário');

document.querySelector('.nome').innerHTML = `Querida <br> ${nome}`;
document.querySelector('.niver').innerHTML = niver;

// Botãod de Download
var btn = document.querySelector("button");

// Captura o elemento de imagem
var img = document.querySelector(".cartao");

// Adiciona o evento para baixar a imagem.
btn.addEventListener("click", function(){

    // Cria um elemento <a> e define o href a ele
    var anchor = document.createElement("a");
    anchor.setAttribute("href", img.src);
    anchor.setAttribute("download", true);
    
    // Adiciona esse <a> no body do documento
    document.body.append(anchor);
    
    // Aciona o evento click
    anchor.click();
    
    // Remove o <a> do body
    document.body.removeChild(anchor);
})
