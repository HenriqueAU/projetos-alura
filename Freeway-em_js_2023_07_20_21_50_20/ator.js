//Variáveis do ator
let xAtor = 300;
let yAtor = 372;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 20);
}

function movimentaAtor() {
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)) {
    if(podeSeMover()) {
      yAtor += 3;
    }
  }
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 20);
    if(colisao) {
      voltarAoInicio();
      if (meusPontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }     
  }
}

function voltarAoInicio() {
  yAtor = 372;
}

function incluiPontos() {
  fill(140, 0, 0);
  textSize(25);
  text(meusPontos, 300, 25);
}

function marcarPonto() {
  if (yAtor < 12) {
    meusPontos += 1;
    voltarAoInicio();
  }
}

function meusPontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeSeMover() {
  return yAtor < 372;
}