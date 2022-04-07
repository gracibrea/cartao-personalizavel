var nome = prompt('Digite o nome da aniversariante');
var niver = prompt('Digite a data do aniversário');

document.querySelector('.nome').innerHTML = `Querida <br> ${nome}`;
document.querySelector('.niver').innerHTML = niver;

let btnGenerate = document.querySelector('.generate-image');
let btnDownload = document.querySelector('.download');

btnGenerate.addEventListener('click', () =>  {
    html2canvas(document.querySelector(".cartao")).then(canvas => {
      btnDownload.href = canvas.toDataURL('image/png');
      btnDownload.download =  'Cartão';
      btnDownload.click();
        document.body.appendChild(canvas)
    })
});
