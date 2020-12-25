class Fruit {
    constructor(x,y){
        
        this.fruit = createSprite(x,y,10,10);
        this.fruit.addImage(cherryimg);
        this.fruit.scale = 0.2;
        fruitGroup.add(this.fruit);
    }
}