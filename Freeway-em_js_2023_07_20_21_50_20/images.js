let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3; 

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload() {
  imagemDaEstrada = loadImage("images/estrada.png");
  imagemDoAtor = loadImage("images/ator-1.png");
  imagemDoCarro = loadImage("images/carro-1.png");
  imagemDoCarro2 = loadImage("images/carro-2.png");
  imagemDoCarro3 = loadImage("images/carro-3.png");
  imagemCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3];
  
  somDaTrilha = loadSound("sounds/trilha.mp3");
  somDaColisao = loadSound("sounds/colidiu.mp3");
  somDoPonto = loadSound("sounds/ponto.wav");
}

