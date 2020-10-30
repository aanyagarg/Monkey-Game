
var monkey , monkey_running;
var banana ,banana_Image;
var obstacle, obstacle_Image;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  banana_Image = loadImage("banana.png");
  obstacle_Image = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  background("white");
  textFont("Britannic");
  fill("red")
  textSize(20);
  text("Score:"+score,500,50);
  
  textFont("Britannic");
  fill("red")
  textSize(20);
  SurvivalTime=Math.ceil(frameCount/frameRate());
  text("Score:"+score,260,30);
  
  text("Score: "+ score, 500,50);
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  drawSprites();
  food();
  obstacles();
}
function food(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(300,50,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(banana_Image);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=100;
    FoodGroup.add(banana);
  }
}
function obstacles(){
  if (frameCount % 300 === 0){
  var obstacle = createSprite(600,10,10,40);
    obstacle.y = Math.round(random(270,300));
    obstacle.addImage(obstacle_Image);
    obstacle.scale=0.3;
    obstacle.velocityX=-3;
    obstacleGroup.add(obstacle);
  }
}




