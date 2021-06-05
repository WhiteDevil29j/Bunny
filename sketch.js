var player;
var target;
var edges;

function setup() {
  createCanvas(600, 600);

  edges = createEdgeSprites();
  player = createSprite(50, 550, 30, 30);
  target = createSprite(550, 50, 50, 50);
  obs1 = createSprite(50, 200, 80, 20);
  obs2 = createSprite(180, 200, 50, 20);
  obs3 = createSprite(300, 200, 100, 20);
  obs4 = createSprite(480, 200, 150, 20);
  obs5 = createSprite(100, 270, 180, 20);
  obs6 = createSprite(310, 270, 150, 20);
  obs7 = createSprite(500, 270, 150, 20);
  obs8 = createSprite(50, 350, 80, 20);
  obs9 = createSprite(160, 350, 50, 20);
  obs10 = createSprite(300, 350, 150, 20);
  obs11 = createSprite(480, 350, 130, 20);

  target.shapeColor = "orangered";
  player.shapeColor = "white";
  obs2.shapeColor = "orange";
  obs1.shapeColor = "orange";
  obs3.shapeColor = "orange";
  obs4.shapeColor = "orange";
  obs5.shapeColor = "orange";
  obs6.shapeColor = "orange";
  obs7.shapeColor = "orange";
  obs8.shapeColor = "orange";
  obs9.shapeColor = "orange";
  obs10.shapeColor = "orange";
  obs11.shapeColor = "orange";

  snakeGroup = new Group()
}

function draw() {
background("green");  

player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);
obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);
obs3.bounceOff(edges[1]);
obs3.bounceOff(edges[0]);


if(keyDown("up")){
  player.y=player.y-5;
}
if(keyDown("down")){
  player.y=player.y+5;
}
if(keyDown("left")){
  player.x=player.x-5;
}
if(keyDown("right")){
  player.x=player.x+5;
}
if(player.isTouching(target)){
  text("YOU WIN",300,100);
}
if(player.isTouching(obs1)){
 
  player.x = 50;
  player.y = 550;
}
if(player.isTouching(obs2)){
 
  player.x = 50;
  player.y = 550;
} 
if(player.isTouching(obs3)){
 
  player.x = 50;
  player.y = 550;
}
if(player.isTouching(obs4)){
 
  player.x = 50;
  player.y = 550;
}
if(player.isTouching(obs5)){
 
  player.x = 50;
  player.y = 550;
}
if(player.isTouching(obs6)){
 
  player.x = 50;
  player.y = 550;
}
if(player.isTouching(obs7)){
 
  player.x = 50;
  player.y = 550;
}
if(player.isTouching(obs8)){
 
  player.x = 50;
  player.y = 550;
}
if(player.isTouching(obs9)){
 
  player.x = 50;
  player.y = 550;
}
if(player.isTouching(obs10)){
 
  player.x = 50;
  player.y = 550;
}
if(player.isTouching(obs11)){
 
  player.x = 50;
  player.y = 550;
}
  createsnakes();

  for (i = 0; i < (snakeGroup).length; i++){
    temp = (snakeGroup).get(i);
    if (bunny.isTouching(temp)) {
      player.x = 50;
      player.y = 550;
    }
  }
  
  drawSprites();
}


function createsnakes() {
  if (frameCount % 30 === 0) {
    snake = createSprite(300,400,50,5)
    snake.shapeColor = ("yellow")
    snakeGroup.add(snake)
  }
}