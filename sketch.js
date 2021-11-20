var chao;
var chao_img;
var player;
var player_img;
function preload(){
  //imagens pré-carregadas
  chao_img = loadImage("path.png");
  player_img = loadAnimation("Runner-1.png","Runner-2.png"); 
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  chao = createSprite(200,200);
  chao.addImage(chao_img);
  chao.velocityY = 3;
  player = createSprite(200,200);
  player.addAnimation("run",player_img);
  player.scale = 0.08;
}

function draw() {
  background(0);
  chao.velocityY = 3;
 if (chao.y>400){
 chao.y = height/2
 }
 
player.x = mouseX;









 drawSprites();
}
