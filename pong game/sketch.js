let xBolinha = 200;
let yBolinha = 100;
let diametro = 15;
let raio = diametro / 2;
let velocidadeXBolinha = 4;
let velocidadeyBolinha = 4;
let xRaquete = 5;
let yRaquete = 150;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let raqueteLargura = 10;
let mostrarRaqueteOponente = 585;
let raqueteAltura = 110;
let colidiu = false
let meusPontos = 0;
let pontosOponente = 0

//sons do jogo
let ponto;
let raquetada;
let trilha

function preload() {
trilha = loadSound("trillha.mp3");
ponto = loadSound("ponnto.mp3");
raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(79,79,79);
  incluiPlacar();
  mostraBolinha();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaqueteOponente(xRaqueteOponente,yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  movimentaBolinha();
  //verificaColisaoRaquete();
  xBolinha += velocidadeXBolinha; 
  yBolinha += velocidadeyBolinha;
  //verifica ColisaoRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
   verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  if ( xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
    incluiPlacar();
    marcaPonto()
  }
    
  if (yBolinha + raio > height || yBolinha - raio < 0 ) {
  velocidadeyBolinha *= -1;
  
 }
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function mostraRaquete(){
  rect (xRaquete,yRaquete,raqueteLargura,raqueteAltura);
}
function mostraRaqueteOponente(){
  rect (xRaqueteOponente,yRaqueteOponente,raqueteLargura,raqueteAltura);
}
function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }velocidadeXBolinha

  if(keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }
}
  if( xBolinha < xRaquete + raqueteAltura
  && yBolinha - raio < yRaquete + raqueteAltura
  && yBolinha + raio > yRaquete)
  {
   velocidadexBolinha *= - 1;
  }
  function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeyBolinha;
  }
  function movimentaRaqueteOponente(){
  if(keyIsDown(87)){
    yRaqueteOponente -=10;
  }velocidadeXBolinha

  if(keyIsDown(83)){
    yRaqueteOponente +=10;
  }
  }
  function drawdraw (){
  background (0);
  mostraBolinha ();
  mostraRaquete();
  movimentaMinhaRaquete();
  movimentaBolinha();
  verificaColisaoRaquete();
  verificaColisaoMinhaRaqueteOPonente();
  }
  
  function verificaColisaoBorda (){
  if (xBolinha + raio > width || xBolinha - raio < 0) {
  velocidadeXBolinha *= -1;
  }
  }
  function verificaColisaoRaquete () {
  if(xBolinha-raio < xRaquete + raqueteLargura
  && yBolinha - raio < yRaquete + raqueteAltura)
  {
  velocidadeXBolinha *= -1;
  }
  }
  function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x,y,raqueteLargura,raqueteAltura,xBolinha,yBolinha,raio);

  if (colidiu) {
  velocidadeXBolinha *= - 1;
    raquetada.play();
  }
  }
  function incluiPlacar(){
  stroke("black");
  textAlign(CENTER);
  textSize(16);
  fill("white");
  
  //placar meusPontos
  fill(color(255,171,0));
  rect(135,10,35,30);
  fill("white");
  text(meusPontos,150,26);
  
  //placar pontosOponente
  fill(color(255,171,0));
  rect(430,10,35,30);
  fill("white");
  text(pontosOponente,450,26);
  }
  function marcaPonto(){
  if (xBolinha >590){
    meusPontos +=1;
    ponto.play();
  }
  if (xBolinha <10){
    pontosOponente +=1;
    ponto.play();
  }
  }
