class Stick{






    constructor(x,y){

        this.x = x;

        this.y = y;
    }


    drawStick(){
        push();
        fill(89,71,0);
        // make the coordinate to the center of the rect
        rectMode(CENTER);
        rect (this.x,this.y,5,40);
        pop();




    }
















}