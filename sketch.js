var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombieImg;
var heartImg,heart1Img,heart2Img,heart,heart1,heart2;
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  zombieImg = loadImage("assets/zombie.png");
  bgImg = loadImage("assets/bg.jpeg");
  heart = loadImage("assets/heart_1.png");
  heart1 = loadImage("assets/heart_2.png");
  heart2 = loadImage("assets/heart_3.png");




}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)



}

function draw() {
  background(0); 
  


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

spawnZombies();

drawSprites();
fill("white");
text(mouseX+','+mouseY,mouseX,mouseY);


}

function spawnZombies(){
 
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var zombie = createSprite(1000,10,40,10);
      zombie.y = Math.round(random(500,10));
      zombie.addImage(zombieImg);
      zombie.scale = 0.1;
      zombie.velocityX = -3;
      zombie.lifetime = 300;
    }
    }

     
