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
    wall23 = new Wall(535,460,75,10);
    wall23 = new Wall(665,460,75,10);
}
function createGhosts(){
    ghost1 = new Ghost(525,500,20,20);
    ghost2 = new Ghost(575,500,20,20);
    ghost3 = new Ghost(630,500,20,20);
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