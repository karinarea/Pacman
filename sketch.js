var pacman, pacmanLeft, pacmanRight, pacmanUp, pacmanDown, pacmanWhole;
var wallGroup;
var score = 0;
var cherryimg;
var fruit2;
//sides
var wall1, wall2,wall3, wall4,wall5,wall6,wall7,wall8,wall9,wall10, wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18;
//cage
var wall19, wall20,wall21,wall22,wall23
//top obsticles
var wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38
, wall39, wall40, wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49, wall50, wall51, 
wall52, wall53, wall54, wall55, wall56, wall57;

//bottom obsticles
var wall58, wall59, wall60, wall61, wall62, wall63, wall64, wall65, wall66, wall67, 
wall68, wall69, wall70, wall71, wall72, wall73, wall74, wall75, wall76, wall77, wall78;
var wall79, wall80, wall81, wall82, wall83, wall84, wall85, wall86, wall87, 
wall88, wall89, wall90, wall91, wall92, wall93, wall94, wall95, wall96, wall97, wall98;

var gameState = "play";
var lives = 3;
var heart1, heart2, heart3, heartGroup;
var ghostGroup, ghost1, ghost2, ghost3, ghost4, redGhostLeft, redGhostRight, redGhostUp, redGhostDown, blueGhostLeft, blueGhostRight, blueGhostUp, blueGhostDown;
var fruit1;
var dotGroup, dot1, dot2,dot3, dot4,dot5,dot6,dot7,dot8,dot9,dot10, dot11,dot12,dot13,dot14,dot15,dot16,dot17,dot18,dot19, dot20,dot21,dot22,dot23,dot24, dot25, dot26, dot27, dot28, dot29, dot30, dot31, dot32, dot33, dot34, dot35, dot36, dot37, dot38, dot39, dot40, dot41, dot42, dot43, dot44, dot45, dot46, dot47, dot48, dot49, dot50, dot51, dot52, dot53, dot54, dot55, dot56, dot57, dot58, dot59, dot60, dot61, dot62, dot63, dot64, dot65, dot66, dot67, dot68, dot69, dot70, dot71, dot72, dot73, dot74, dot75, dot76, dot77, dot78, dot79, dot80, dot81, dot82, dot83, dot84, dot85, dot86, dot87, dot88, dot89, dot90, dot91, dot92, dot93, dot94, dot95, dot96, dot97, dot98, dot99, dot100, dot101, dot102, dot103, dot104, dot105,
dot106, dot107, dot108, dot109, dot110, dot111, dot112, dot113, dot115, dot116, dot117, dot118, dot119, dot120, dot121, dot122;

function preload() {
  pacmanLeft = loadAnimation("Images/left1.png","Images/left2.png","Images/left3.png")
  pacmanDown = loadAnimation("Images/down1.png","Images/down2.png","Images/down3.png")
  pacmanRight = loadAnimation("Images/right1.png", "Images/right2.png", "Images/right3.png");
  pacmanUp = loadAnimation("Images/up1.png", "Images/up2.png", "Images/up3.png");
  pacmanWhole = loadAnimation("Images/down1.png");

  redGhostLeft = loadImage("Images/redLeft.png");
  redGhostRight = loadImage("Images/redRight.png");
  redGhostUp = loadImage("Images/redUp.png");
  redGhostDown = loadImage("Images/redDown.png");

  blueGhostLeft = loadImage("Images/blueLeft.png");
  blueGhostRight = loadImage("Images/blueRight.png");
  blueGhostUp = loadImage("Images/blueUp.png");
  blueGhostDown = loadImage("Images/blueDown.png");

  pinkGhostLeft = loadImage("Images/pinkLeft.png");
  pinkGhostRight = loadImage("Images/pinkRight.png");
  pinkGhostUp = loadImage("Images/pinkUp.png");
  pinkGhostDown = loadImage("Images/pinkDown.png");

  orangeGhostLeft = loadImage("Images/orangeLeft.png");
  orangeGhostRight = loadImage("Images/orangeRight.png");
  orangeGhostUp = loadImage("Images/orangeUp.png");
  orangeGhostDown = loadImage("Images/orangeDown.png");
  cherryimg = loadImage("Images/download.png");


}
function setup() {
  createCanvas(1200,1000);
  pacman = createSprite(600,725,100,100);
  pacman.scale = 1.3;
  
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

  dotGroup = new Group();
 
  createDots();
   fruitGroup = new Group();
   createFruit();
}

function draw() {
  background(0);
  console.log("X: " + mouseX);
  console.log("Y: " + mouseY);
  pacman.collide(wallGroup);
  textSize(30);
  fill("white");
  text("Score: " + score,50 ,30);
  pacmanMove();
  //console.log("x: "+pacman.x);
  //console.log("y: "+pacman.y);
  heartVisible();
  
  if(gameState === "start"){

  }
  else if(gameState === "play"){
    
    for(var i = 0; i<dotGroup.length; i++){
      if(dotGroup.get(i).isTouching(pacman)){
        dotGroup.get(i).destroy();
        score = score + 10;
      }
    }

     
    for(var i = 0; i<fruitGroup.length; i++){
      if(fruitGroup.get(i).isTouching(pacman)){
        fruitGroup.get(i).destroy();
        score = score + 50;
      }
    }
    
    
    if(pacman.isTouching(ghostGroup)){
      lives--;
      if(lives > 0){
        gameState = "start";
      }
      else{
        gameState = "end";
      }
    }

  }
  else if(gameState === "end"){

  }
  
  

  ghost1.moveBlueGhost();
  ghost2.moveRedGhost();
  ghost3.movePinkGhost();
  ghost4.moveOrangeGhost();
  //console.log(lives);
  
  drawSprites();
}


