let nome = prompt('Digite o nome da aniversariante');
let niver = prompt('Digite a data do aniversário');

document.querySelector('.nome').innerHTML = `Querida <br> ${nome}`;
document.querySelector('.niver').innerHTML = niver;
