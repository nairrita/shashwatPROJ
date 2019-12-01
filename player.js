class Player{
    constructor(x,y){
     this.x = x;
    this.y = y;
        this.width = 20;
        this.height = 30;
        //this.image = loadImage("images/player.png");
    }
    
   move(pos){
    this.y+=pos*10
   }
    
    display(){
        
        rectMode(CENTER);
        rect(this.x,this.y,this.width*3,this.height*3);
    }
   
}