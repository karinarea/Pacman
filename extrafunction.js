function createWalls(){
    //side
    wall1 = new Wall(600,900,900,5);
    wall2 = new Wall(150,800,5,200);
    wall3 = new Wall(1050,800,5,200);
    wall4 = new Wall(600,100,900,5); 
    wall5 = new Wall(150,200,5,200);
    wall6 = new Wall(1050,200,5,200);
    wall7 = new Wall(225,300,150,5);
    wall8 = new Wall(975,300,150,5); 
    wall9 = new Wall(225,700,150,5);
    wall10 = new Wall(975,700,150,5); 
    wall11 = new Wall(300,390,5,175);
    wall12 = new Wall(900,390,5,175); 
    wall13 = new Wall(300,610,5,175);
    wall14 = new Wall(900,610,5,175); 
    wall15 = new Wall(225,475,150,5);
    wall16 = new Wall(975,475,150,5); 
    wall17 = new Wall(225,525,150,5);
    wall18 = new Wall(975,525,150,5); 
    //cage
    wall19 = new Wall(500,500,10,90);
    wall20 = new Wall(700,500,10,90);
    wall21 = new Wall(600,540,200,10);
    wall22 = new Wall(535,460,75,10);
    wall23 = new Wall(665,460,75,10);
    wall24 = new Wall(600,460,60,5);
    wall24.wall.shapeColor = "white";

    
    //top obsticles 
    wall25 = new Wall(600,150,10,100);
    wall26 = new Wall(200,185,10,80);
    wall27 = new Wall(270,185,10,80);
    wall28 = new Wall(235,150,80,10);
    wall29 = new Wall(235,220,80,10);
    //box2
    wall30 = new Wall(450,185,10,80);
    wall31 = new Wall(520,185,10,80);
    wall32 = new Wall(485,150,80,10);
    wall33 = new Wall(485,220,80,10);
    //box3
    wall34 = new Wall(675,185,10,80);
    wall35 = new Wall(755,185,10,80);
    wall36 = new Wall(720,150,80,10);
    wall37 = new Wall(720,220,80,10);
    //box4
    wall38 = new Wall(925,185,10,80);
    wall39 = new Wall(995,185,10,80);
    wall40 = new Wall(960,150,80,10);
    wall41 = new Wall(960,220,80,10);
    //middle box
    wall42 = new Wall(600,300,200,10);
    wall43 = new Wall(600,375,200,10);
    wall44 = new Wall(500,340,10,75);
    wall45 = new Wall(700,340,10,75);
    wall46 = new Wall(600,400,10,50);
    //side
    wall47 = new Wall(350,375,15,200);
    wall48 = new Wall(375,375,50,15);
    //side2
    wall49 = new Wall(850,375,15,200);
    wall50 = new Wall(825,375,50,15);
    
    //bottom obsticles
    wall51 = new Wall(350,610,15,175);
    wall52 = new Wall(850,610,15,175);
    //middle box
    wall53 = new Wall(600,600,200,10);
    wall54 = new Wall(600,650,200,10);
    wall55 = new Wall(500,625,10,50);
    wall56 = new Wall(700,625,10,50);
    wall57 = new Wall(600,675,10,50);
    //middle box2
    wall58 = new Wall(600,750,200,10);
    wall59 = new Wall(600,800,200,10);
    wall60 = new Wall(500,775,10,50);
    wall61 = new Wall(700,775,10,50);
    wall62 = new Wall(600,825,10,50);
    //left 
    wall63 = new Wall(450,700,80,10);
    wall64 = new Wall(300,740,60,10);
    wall65 = new Wall(325,775,10,80);
    wall66 = new Wall(350,850,200,10);
    wall67 = new Wall(375,820,10,70);
    wall68 = new Wall(175,820,50,10);
    wall69 = new Wall(175,780,50,10);
    wall70 = new Wall(200,800,10,50);
    wall71 = new Wall(1025,820,50,10);
    wall72 = new Wall(1025,780,50,10);
    wall73 = new Wall(1000,800,10,50);
    wall74 = new Wall(750,700,80,10);
    wall75 = new Wall(900,740,60,10);
    wall76 = new Wall(875,775,10,80);
    wall77 = new Wall(850,850,200,10);
    wall78 = new Wall(825,820,10,70);
    //top extra walls
    wall79 = new Wall(430,340,10,80);
    wall80 = new Wall(430,300,80,10);
    wall81 = new Wall(770,340,10,80);
    wall82 = new Wall(770,300,80,10);
    wall83 = new Wall(720,415,100,10);
    wall84 = new Wall(480,415,100,10);
    wall85 = new Wall(800,550,10,200);
    wall86 = new Wall(400,550,10,200);
    wall87 = new Wall(440,570,70,10);
}
function createGhosts(){
    ghost1 = new Ghost(625,500,20,20);
    ghost2 = new Ghost(580,500,20,20);
    ghost3 = new Ghost(530,500,20,20);
    ghost4 = new Ghost(675,500,20,20);
}
function moveGhosts(){
  var selfDirection;
  if(ghost1.ghost.velocityX<0){
    selfDirection = "left";
  }
  else if(ghost1.ghost.velocityX>0){
    selfDirection = "right";
  }
  else if(ghost1.ghost.velocityY<0){
    selfDirection = "up";
  }
  else if(ghost1.ghost.velocityY>0){
    selfDirection = "down";
  }
}
function createHearts(){
    heart1 = createSprite(1170, 30, 20,20);
    heart1.shapeColor = "red";
    heartGroup.add(heart1);

    heart2 = createSprite(1120, 30, 20,20);
    heart2.shapeColor = "red";
    heartGroup.add(heart2);

    heart3 = createSprite(1070, 30, 20,20);
    heart3.shapeColor = "red";
    heartGroup.add(heart3);

    
}

function createDots(){
  //Top left  (top to bottom)
  dot1 = new Dots(175,125);
  dot2 = new Dots(175,150);
  dot3 = new Dots(175,175);
  dot4 = new Dots(175,200);
  dot5 = new Dots(175,225);
  dot6 = new Dots(175,250);
  dot7 = new Dots(175,275);
  dot8 = new Dots(200,125);
  
  //Top Line (left to right)
  dot9 = new Dots(225,125);
  dot10 = new Dots(250,125);
  dot11 = new Dots(275,125);
  dot12 = new Dots(300,125);
  dot13 = new Dots(325,125);
  dot14 = new Dots(350,125);
  dot15 = new Dots(375,125);
  dot16 = new Dots(400,125);
  dot17 = new Dots(426,125);
  dot18 = new Dots(452,125);
  dot19 = new Dots(477,125);
  dot20 = new Dots(503,125);
  dot21 = new Dots(529,125);
  dot22 = new Dots(556,125);
  dot26 = new Dots(650,125);
  dot27 = new Dots(675,125);
  dot28 = new Dots(700,125);
  dot29 = new Dots(725,125);
  dot30 = new Dots(750,125);
  dot31 = new Dots(775,125);
  dot32 = new Dots(800,125);
  dot33 = new Dots(825,125);
  dot34 = new Dots(850,125);
  dot35 = new Dots(875,125);
  dot36 = new Dots(900,125);
  dot37 = new Dots(925,125);
  dot38 = new Dots(950,125);
  dot39 = new Dots(975,125);
  dot40 = new Dots(1000,125);
  dot41 = new Dots(1025,125);

  //Top right  (top to bottom)
  dot42 = new Dots(1025,150);
  dot43 = new Dots(1025,150);
  dot44 = new Dots(1025,175);
  dot45 = new Dots(1025,200);
  dot46 = new Dots(1025,225);
  dot47 = new Dots(1025,250);
  dot48 = new Dots(1025,275);

  
  //Second Line (left to right)
  dot49 = new Dots(200, 275);
  dot50 = new Dots(225,275);
  dot51 = new Dots(250,275);
  dot52 = new Dots(275,275);
  dot53 = new Dots(300,275);
  dot54 = new Dots(325,275);
  dot55 = new Dots(350,275);
  dot56 = new Dots(375,275);
  dot57 = new Dots(400,275);
  dot58 = new Dots(425,275);
  dot59 = new Dots(450,275);
  dot60 = new Dots(475,275);
  dot61 = new Dots(500,275);
  dot62 = new Dots(525,275);
  dot63 = new Dots(550,275);
  dot64 = new Dots(575,275);
  dot65 = new Dots(600,275);
  dot66 = new Dots(625,275);
  dot67 = new Dots(650,275);
  dot68 = new Dots(675,275);
  dot69 = new Dots(700,275);
  dot70 = new Dots(725,275);
  dot71 = new Dots(750,275);
  dot72 = new Dots(775,275);
  dot73 = new Dots(800,275);
  dot74 = new Dots(825,275);
  dot75 = new Dots(850,275);
  dot76 = new Dots(875,275);
  dot77 = new Dots(900,275);
  dot78 = new Dots(925,275);
  dot79 = new Dots(950,275);
  dot80 = new Dots(975,275);
  dot81 = new Dots(1000,275);

  //Top left - second line - top to bottom
  dot82 = new Dots(300,150);
  dot83 = new Dots(300,175);
  dot84 = new Dots(300,200);
  dot85 = new Dots(300,225);
  dot23 = new Dots(300,250);


  //Top left - third line - top to bottom
  dot86 = new Dots(425,150);
  dot87 = new Dots(425,175);
  dot88 = new Dots(425,200);
  dot89 = new Dots(425,225);
  dot24 = new Dots(425,250);


  //Top left - fourth line - top to bottom
  dot90 = new Dots(556,150);
  dot91 = new Dots(556,175);
  dot92 = new Dots(556,200);
  dot93 = new Dots(556,225);
  dot25 = new Dots(556,250);


  //Top left - fifth line - top to bottom
  dot94 = new Dots(650,150);
  dot95 = new Dots(650,175);
  dot96 = new Dots(650,200);
  dot97 = new Dots(650,225);
  dot125 = new Dots(650,250);

  //Top left - sixth line - top to bottom
  dot98 = new Dots(778,150);
  dot99 = new Dots(778,175);
  dot100 = new Dots(778,200);
  dot101 = new Dots(778,225);
  dot126 = new Dots(778,250);

  //Top left - seventh line - top to bottom
  dot102 = new Dots(900,150);
  dot103 = new Dots(900,175);
  dot104 = new Dots(900,200);
  dot105 = new Dots(900,225);
  dot127 = new Dots(900,250);

  // Left side dots- top to bottom
  dot106 = new Dots(325,275);
  dot107 = new Dots(325,300);
  dot108 = new Dots(325,325);
  dot109 = new Dots(325,350);
  dot110 = new Dots(325,375);
  dot111 = new Dots(325,400);
  dot112 = new Dots(325,425);
  dot113 = new Dots(325,450);
  dot114 = new Dots(325,475);
  dot115 = new Dots(325,500);
  dot116 = new Dots(325,525);
  dot117 = new Dots(325,550);
  dot118 = new Dots(325,575);
  dot119 = new Dots(325,600);
  dot120 = new Dots(325,625);
  dot121 = new Dots(325,650);
  dot122 = new Dots(325,680);
  dot123 = new Dots(325,720);

  // right side dots- top to bottom
  dot128 = new Dots(877,300);
  dot129 = new Dots(877,325);
  dot130 = new Dots(877,350);
  dot131 = new Dots(877,375);
  dot132 = new Dots(877,400);
  dot133 = new Dots(877,425);
  dot134 = new Dots(877,450);
  dot135 = new Dots(877,475);
  dot136 = new Dots(877,500);
  dot137 = new Dots(877,525);
  dot138 = new Dots(877,550);
  dot139 = new Dots(877,575);
  dot140 = new Dots(877,600);
  dot141 = new Dots(877,625);
  dot142 = new Dots(877,650);
  dot143 = new Dots(877,680);
  dot144 = new Dots(877,720);

  //Bottom - Line 1 - left to right

  dot145 = new Dots(175,720);
  dot146 = new Dots(200,720);
  dot147 = new Dots(225,720);
  dot148 = new Dots(250,720);
  dot149 = new Dots(275,720);
  dot150 = new Dots(300,720);
  dot151 = new Dots(325,720);
  dot152 = new Dots(350,720);
  dot153 = new Dots(375,720);
  dot154 = new Dots(400,720);
  dot155 = new Dots(425,720);
  dot156 = new Dots(450,720);
  dot157 = new Dots(475,720);
  dot158 = new Dots(500,720);
  dot159 = new Dots(525,720);
  dot160 = new Dots(550,720);

  dot124 = new Dots(900,720);

  
}


function heartVisible(){
    if(lives === 3){
        heart1.visible = true;
        heart2.visible = true;
        heart3.visible = true;
    }
    else if(lives === 2) {
        heart1.visible = true;
        heart2.visible = true;

        heart3.visible = false;
    }
    else if (lives === 1){
        heart1.visible = true;

        heart2.visible = false;
        heart3.visible = false;
    }
    else{
        heartGroup.setVisibileEach(false);
    }
}

function pacmanMove() {
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
}