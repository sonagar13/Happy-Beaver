class Beaver{

    constructor(x,y){
        this.x = x;
        this.y = y;

        this.image = loadImage("Hopper-Happy1.png");

        //this.image.scale = 2;
    this.sticks = 0;



    }



    drawBeaver(){

        image(this.image, this.x, this.y, 50, 50);
        this.y = constrain(this.y,0,height-100);
    }

/*
    changeImage(){
        console.log("image");
        this.image = loadImage("GrassBlock.png"); 
        //this.x = 300;
        //this.y = 300;


    }

*/
    hop() {
        this.image = loadImage("Hopper-Jumping3.png");
        
        this.y -= 15;
    };

    fall() {
        this.image = loadImage("Hopper-Happy1.png");
        this.y += 15;
    };


    checkForStickGrab(stick){

        if(stick.x >= this.x && stick.x <= (this.x + 40)&&
        (stick.y >= this.y && stick.y <= (this.y + 40))) {
        stick.y = -400;
        this.sticks++;
    }


    }

}