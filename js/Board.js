class Board {
    constructor(x,y,w,h){
        var boardOptions = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,w,h,boardOptions);

        this.width   = w;
        this.height = h;
        this.image = loadImage("./assets/board.png");

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}