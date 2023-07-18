//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 18;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//varíaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 80;

//variáveis do oponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

//placar
let meusPontos = 0;
let pontosOponente = 0;

//colisão da biblioteca
let colidiu = false;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquetePlayer1();
  //movimentaRaquetePlayer2();
  //colisaoRaquete();
  colisaoRaqueteBiblioteca(xRaquete, yRaquete); 
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcarPonto();
}

function mostraBolinha() {
   circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBorda() {
  if(xBolinha + raio > width || xBolinha - raio < 0) {
      velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0) {
      velocidadeYBolinha *= -1;
    }
}

function mostraRaquete(x, y) {
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

function movimentaRaquetePlayer1() {
  if(keyIsDown(UP_ARROW)) {
     yRaquete -= 6;
   }
  if(keyIsDown(DOWN_ARROW)) {
     yRaquete += 6;
   }
   yRaquete = constrain(yRaquete, 5, 395 - alturaRaquete);
}

function movimentaRaquetePlayer2() {
  if(keyIsDown(87)) {
     yRaqueteOponente -= 6;
   }
  if(keyIsDown(83)) {
     yRaqueteOponente += 6;
   }
   yRaqueteOponente = constrain(yRaqueteOponente, 5, 395 - alturaRaquete);
}

function colisaoRaquete() {
  if(xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete) {
     velocidadeXBolinha *= -1;
   }
}

function colisaoRaqueteBiblioteca(x, y) {
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = (yBolinha - yRaqueteOponente - comprimentoRaquete) / 2 - 30 + chanceDeErrar; 
  //yRaqueteOponente += yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30 + chanceDeErrar;
  yRaqueteOponente += velocidadeYOponente;
  yRaqueteOponente = constrain(yRaqueteOponente, 5, 395 - alturaRaquete);
  calculaChanceDeErrar()
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(20)
  fill(color(0,0,128));
  rect(180, 9, 40, 20);
  fill(255);
  text(meusPontos, 200, 26);
  fill(color(0,0,128));
  rect(380, 9, 40, 20);
  fill(255);
  text(pontosOponente, 400, 26);
}

function marcarPonto() {
  if(xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if(xBolinha < 10) {
    pontosOponente += 1;
    ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39) {
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35) {
    chanceDeErrar = 35
    }
  }
}


  
 
