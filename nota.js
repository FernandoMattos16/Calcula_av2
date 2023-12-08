// nota.js
function calcularNota() {
    var nota1 = parseFloat(document.getElementById('nota1').value.replace(',', '.'));
    var resultado = 1968 - (2*nota1);
    document.getElementById('resultado').innerHTML = 'Nota necessária: ' + resultado.toFixed(2);
    var imagem = document.getElementById('imagem');
    imagem.src = 'ferias.jpg'; // substitua 'URL_DA_IMAGEM' pelo URL da imagem que você deseja exibir
    imagem.style.display = 'block';
    imagem.style.margin = 'auto';
    imagem.style.width = '200px';
    imagem.style.height = '30%';
}