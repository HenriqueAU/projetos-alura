//Variáveis dos carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 95, 150, 210, 265, 320];
let velocidadeCarros = [4, 8, 6, 7, 5, 3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
  for(let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for(let i = 0; i < xCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarroPosicaoInicial() {
  for(let i = 0; i < xCarros.length; i++) {
    if(passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarros) {
  return xCarros < -50;
}