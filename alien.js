class Alien{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 30;
       // this.image = loadImage("images/alien1.png")
    }
    display(){
        rectMode(CENTER);
        rect(this.x,this.y,this.width*4,this.height*4);
    }
}