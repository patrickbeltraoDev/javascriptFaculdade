
var cores = [
    {'id': 1, 'nome': 'Amarelo'},
    {'id': 2, 'nome': 'Preto'},
    {'id': 3, 'nome': 'Branco'},
];

const coresNomes = cores.map(cor => cor.nome);

var resultado = document.getElementById('result');
resultado.innerHTML += coresNomes;