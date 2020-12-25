class Ghost{
    constructor(x,y,w,h){
        this.allDirections = [-1,1,-2,2];
        this.ghost = createSprite(x,y,w,h);
        this.ghost.shapeColor = "orange";
        ghostGroup.add(this.ghost);
    }

  
    moveBlueGhost(){
      var selfDirection=0;
    var availableDirections = [];
      if(this.ghost.velocityX<0){
        selfDirection = -1;
        this.ghost.addImage(blueGhostLeft);
      }
      else if(this.ghost.velocityX>0){
        selfDirection = 1;
        this.ghost.addImage(blueGhostRight);
    
      }
      else if(this.ghost.velocityY<0){
        selfDirection = -2;
        this.ghost.addImage(blueGhostUp);
    
      }
      else if(this.ghost.velocityY>0){
        selfDirection = 2;
        this.ghost.addImage(blueGhostDown);
    
      }
    
      this.ghost.bounceOff(wallGroup);

      var oppositeDirection = (-1) *selfDirection;
      for(var i = 0; i<4; i++){
        if(this.allDirections[i] !== oppositeDirection){
          availableDirections.push(this.allDirections[i]);
        }
      }

      //dist(x1, y1, x2, y2); - distance between two objects
    }
    
    moveRedGhost(){
      var selfDirection;
      if(this.ghost.velocityX<0){
        selfDirection = "left";
        this.ghost.addImage(redGhostLeft);
      }
      else if(this.ghost.velocityX>0){
        selfDirection = "right";
        this.ghost.addImage(redGhostRight);
    
      }
      else if(this.ghost.velocityY<0){
        selfDirection = "up";
        this.ghost.addImage(redGhostUp);
    
      }
      else if(this.ghost.velocityY>0){
        selfDirection = "down";
        this.ghost.addImage(redGhostDown);
    
      }
    
      this.ghost.bounceOff(wallGroup);
      //console.log("velocityX: " + this.ghost.velocityX);
      //console.log("velocityY: " + this.ghost.velocityY);
    
    }
    movePinkGhost(){
      var selfDirection;
      if(this.ghost.velocityX<0){
        selfDirection = "left";
        this.ghost.addImage(pinkGhostLeft);
      }
      else if(this.ghost.velocityX>0){
        selfDirection = "right";
        this.ghost.addImage(pinkGhostRight);
    
      }
      else if(this.ghost.velocityY<0){
        selfDirection = "up";
        this.ghost.addImage(pinkGhostUp);
    
      }
      else if(this.ghost.velocityY>0){
        selfDirection = "down";
        this.ghost.addImage(pinkGhostDown);
        
    
      }
      this.ghost.bounceOff(wallGroup);
    }
    moveOrangeGhost(){
      var selfDirection;
      if(this.ghost.velocityX<0){
        selfDirection = "left";
        this.ghost.addImage(orangeGhostLeft);
      }
      else if(this.ghost.velocityX>0){
        selfDirection = "right";
        this.ghost.addImage(orangeGhostRight);
    
      }
      else if(this.ghost.velocityY<0){
        selfDirection = "up";
        this.ghost.addImage(orangeGhostUp);
    
      }
      else if(this.ghost.velocityY>0){
        selfDirection = "down";
        this.ghost.addImage(orangeGhostDown);
        
    
      }
      this.ghost.bounceOff(wallGroup);
    }
}
