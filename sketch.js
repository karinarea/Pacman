var pacman, pacmanLeft, pacmanRight, pacmanUp, pacmanDown, pacmanWhole;
var wallGroup;
//sides
var wall1, wall2,wall3, wall4,wall5,wall6,wall7,wall8,wall9,wall10, wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18;
//cage
var wall19, wall20,wall21,wall22,wall23
//top obsticles
var wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32, wall33, wall19, wall19, wall19, wall19, wall19
, wall19, wall19, wall19, wall19, wall19, wall19, wall19, wall19, wall19, 
wall19, wall19, wall19, wall19, wall19, wall19, wall19, wall19, wall19;

var gamestate = "start";
var lives = 3;
var heart1, heart2, heart3, heartGroup;
var ghostGroup, ghost1, ghost2, ghost3, ghost4;
function preload() {
  pacmanLeft = loadAnimation("Images/left1.png","Images/left2.png","Images/left3.png")
  pacmanDown = loadAnimation("Images/down1.png","Images/down2.png","Images/down3.png")
  pacmanRight = loadAnimation("Images/right1.png", "Images/right2.png", "Images/right3.png");
  pacmanUp = loadAnimation("Images/up1.png", "Images/up2.png", "Images/up3.png");
  pacmanWhole = loadAnimation("Images/down1.png");
}
function setup() {
  createCanvas(1200,1000);
  pacman = createSprite(800,750,100,100);
  pacman.scale = 1.5;
  pacman.addAnimation("whole", pacmanWhole);
  pacman.addAnimation("up", pacmanUp);
  pacman.addAnimation("down", pacmanDown);
  pacman.addAnimation("right", pacmanRight);
  pacman.addAnimation("left", pacmanLeft);
  

  wallGroup = new Group();
  createWalls();

  ghostGroup = new Group();
  createGhosts();

  heartGroup = new Group();
  createHearts();
}

function draw() {
  background(0);
  pacman.collide(wallGroup);
  
  if(keyDown(UP_ARROW)) {
    pacman.changeAnimation("up");
    pacman.y = pacman.y - 5;
  } 
  if(keyDown(DOWN_ARROW)) {
    pacman.changeAnimation("down");
    pacman.y = pacman.y + 5;
  } 
  if(keyDown(LEFT_ARROW)) {
    pacman.changeAnimation("left");
    pacman.x = pacman.x - 5;
  } 
  if(keyDown(RIGHT_ARROW)) {
    pacman.changeAnimation("right");
    pacman.x = pacman.x + 5;
  } 
  
  //PORTAL
  if(pacman.x > 1040){
    pacman.x = 150;
    pacman.y = 500;
  }
  if (pacman.x < 150) {
    pacman.x = 1040;
    pacman.y = 500;
  }
  //console.log("x: "+pacman.x);
  //console.log("y: "+pacman.y);
  heartVisible();

  if(gamestate === "play" && pacman.isTouching(ghostGroup)){
    lives--;
    if(lives > 0){
      gamestate = "start";
    }
    else{
      gamestate = "end";
    }
  }

  //console.log(lives);
  
  drawSprites();
}