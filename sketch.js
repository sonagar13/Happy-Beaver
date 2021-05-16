  
  
  // alias

  const Engine =  Matter.Engine;
  const World =  Matter.World;
  const Bodies = Matter.Bodies;


 var engine;
 var world;
  var bird;

var beaver;
  var grassXs = [];
  var grassImage;
var sticks = [];

  function preload(){

    grassImage = loadImage("GrassBlock.png");



  }
 
function setup() {
  createCanvas(600,600);
  beaver = new Beaver(80,550);
  
  for (var i = 0; i < 35; i++) {
      grassXs.push(i*20);
  }

  for (var i = 0; i < 50; i++) {
    sticks.push(new Stick(i*40 + 300, random(20,360)));
}

}

function draw() {
  // draw background
  background(227, 254, 255);
    fill(130, 79, 43);
    //console.log("height", height*0.90);

    //console.log("height area",height*0.20);
    rect(0, height*0.90, width, height*0.10);
    for (var i = 0; i < grassXs.length; i++) {
      image(grassImage, grassXs[i], height*0.88, 20, 20);
      grassXs[i] -= 1;


      if (grassXs[i] <= -20) {
        grassXs[i] = width;
       }
    }  
    for (var i = 0; i < sticks.length; i++) {
      sticks[i].drawStick();
      beaver.checkForStickGrab(sticks[i]);
      sticks[i].x -= 1;
    }

// Winner Script and Score
    textSize(18);
    text("Score: " + beaver.sticks, 20, 30);

    if (beaver.sticks/sticks.length >= 0.10) {
      textSize(36);



      
      text("YOU WIN!!!!", 100, 200);
      
  }




    beaver.drawBeaver();


    if (keyIsPressed && key === ' ' ) {


      //console.log("try");
      beaver.hop();
    } else {
      beaver.fall();
  }


   
} 
  
  
  /*
  function keyPressed(){

    if(key ===' '){
      //console.log("space"); 
      beaver.hop();
    }

    else{
      beaver.fall();


    }
  } 
  */
  
  
  
