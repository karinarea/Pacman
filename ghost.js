class Ghost{
    constructor(x,y,w,h){
        
        this.ghost = createSprite(x,y,w,h);
        this.ghost.shapeColor = "orange";
        ghostGroup.add(this.ghost);
    }
}
