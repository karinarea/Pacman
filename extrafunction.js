function createWalls(){
    //side
    wall1 = new Wall(600,900,900,5);
    wall2 = new Wall(150,800,5,200);
    wall3 = new Wall(1050,800,5,200);
    wall4 = new Wall(600,100,900,5); 
    wall5 = new Wall(150,200,5,200);
    wall6 = new Wall(1050,200,5,200);
    wall7 = new Wall(200,300,100,5);
    wall8 = new Wall(1000,300,100,5); 
    wall9 = new Wall(200,700,100,5);
    wall10 = new Wall(1000,700,100,5); 
    wall11 = new Wall(250,390,5,175);
    wall12 = new Wall(950,390,5,175); 
    wall13 = new Wall(250,610,5,175);
    wall14 = new Wall(950,610,5,175); 
    wall15 = new Wall(200,475,100,5);
    wall16 = new Wall(1000,475,100,5); 
    wall17 = new Wall(200,525,100,5);
    wall18 = new Wall(1000,525,100,5); 
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
    wall26 = new Wall(225,180,10,80);
    wall27 = new Wall(295,180,10,80);
    wall28 = new Wall(260,145,80,10);
    wall29 = new Wall(260,215,80,10);
    //box2
    wall30 = new Wall(425,180,10,80);
    wall31 = new Wall(495,180,10,80);
    wall32 = new Wall(460,145,80,10);
    wall33 = new Wall(460,215,80,10);
    //box3
    wall34 = new Wall(725,180,10,80);
    wall35 = new Wall(795,180,10,80);
    wall36 = new Wall(760,145,80,10);
    wall37 = new Wall(760,215,80,10);
    //box4
    wall38 = new Wall(925,180,10,80);
    wall39 = new Wall(995,180,10,80);
    wall40 = new Wall(960,145,80,10);
    wall41 = new Wall(960,215,80,10);
    //middle box
    wall42 = new Wall(600,300,200,10);
    wall43 = new Wall(600,350,200,10);
    wall44 = new Wall(500,325,10,50);
    wall45 = new Wall(700,325,10,50);
    wall46 = new Wall(600,375,10,50);
    //side
    wall47 = new Wall(325,375,10,200);
    wall48 = new Wall(350,375,50,10);
    //side2
    wall49 = new Wall(875,375,10,200);
    wall50 = new Wall(850,375,50,10);
    
    //bottom obsticles
    wall51 = new Wall(325,610,10,175);
    wall52 = new Wall(875,610,10,175);
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
    wall66 = new Wall(700,625,10,50);
    wall67 = new Wall(600,675,10,50);
}
function createGhosts(){
    ghost1 = new Ghost(625,500,20,20);
    ghost2 = new Ghost(580,500,20,20);
    ghost3 = new Ghost(530,500,20,20);
    ghost4 = new Ghost(675,500,20,20);
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
    dot17 = new Dots(425,125);
    dot18 = new Dots(450,125);
    dot19 = new Dots(475,125);
    dot20 = new Dots(500,125);
    dot21 = new Dots(525,125);
    dot22 = new Dots(550,125);
    dot23 = new Dots(575,125);
    dot24 = new Dots(600,125);
    dot25 = new Dots(625,125);
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
    dot49 = new Dots(200, 250);
    dot50 = new Dots(225,250);
    dot51 = new Dots(250,250);
    dot52 = new Dots(275,250);
    dot53 = new Dots(300,250);
    dot54 = new Dots(325,250);
    dot55 = new Dots(350,250);
    dot56 = new Dots(375,250);
    dot57 = new Dots(400,250);
    dot58 = new Dots(425,250);
    dot59 = new Dots(450,250);
    dot60 = new Dots(475,250);
    dot61 = new Dots(500,250);
    dot62 = new Dots(525,250);
    dot63 = new Dots(550,250);
    dot64 = new Dots(575,250);
    dot65 = new Dots(600,250);
    dot66 = new Dots(625,250);
    dot67 = new Dots(650,250);
    dot68 = new Dots(675,250);
    dot69 = new Dots(700,250);
    dot70 = new Dots(725,250);
    dot71 = new Dots(750,250);
    dot72 = new Dots(775,250);
    dot73 = new Dots(800,250);
    dot74 = new Dots(825,250);
    dot75 = new Dots(850,250);
    dot76 = new Dots(875,250);
    dot77 = new Dots(900,250);
    dot78 = new Dots(925,250);
    dot79 = new Dots(950,250);
    dot80 = new Dots(975,250);
    dot81 = new Dots(1000,250);

    //Top left - second line - top to bottom
    dot82 = new Dots(300,150);
    dot83 = new Dots(300,175);
    dot84 = new Dots(300,200);
    dot85 = new Dots(300,225);

    //Top left - third line - top to bottom
    dot86 = new Dots(425,150);
    dot87 = new Dots(425,175);
    dot88 = new Dots(425,200);
    dot89 = new Dots(425,225);

    //Top left - fourth line - top to bottom
    dot90 = new Dots(550,150);
    dot91 = new Dots(550,175);
    dot92 = new Dots(550,200);
    dot93 = new Dots(550,225);

    //Top left - fifth line - top to bottom
    dot94 = new Dots(675,150);
    dot95 = new Dots(675,175);
    dot96 = new Dots(675,200);
    dot97 = new Dots(675,225);

    //Top left - sixth line - top to bottom
    dot98 = new Dots(800,150);
    dot99 = new Dots(800,175);
    dot100 = new Dots(800,200);
    dot101 = new Dots(800,225);

    //Top left - seventh line - top to bottom
    dot102 = new Dots(925,150);
    dot103 = new Dots(925,175);
    dot104 = new Dots(925,200);
    dot105 = new Dots(925,225);

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