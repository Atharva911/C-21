var fixedRect, movingRect,square,triangle,circle,parrot;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = false
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = false;

 square=createSprite(100,100,50,50)
 square.shapeColor="purple";

 triangle=createSprite(200,200,50,50)
 triangle.shapeColor="blue"

 circle=createSprite(300,300,50,50)
 circle.shapeColor="red"

 parrot=createSprite(400,400,50,50)
 parrot.shapeColor="green"




}

function draw() {
  background(0,0,0);  

  

    if(touch(movingRect,square)){
    
      movingRect.shapeColor="blue"
      square.shapeColor="blue"

    }

    else{

      movingRect.shapeColor="green";
      square.shapeColor="purple";


    }
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  drawSprites();
}
