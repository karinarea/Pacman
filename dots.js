class Dots {
    constructor(x,y){
        
        this.dot = createSprite(x,y,10,10);
        this.dot.shapeColor = "yellow";
        dotGroup.add(this.dot);
    }
}