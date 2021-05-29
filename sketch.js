var canvas;
var music,surface1,surface2,surface3,surface4,ball;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
  surface1 = createSprite(40,400,100,50)
  surface1.shapeColor="blue"
  surface2= createSprite(140,400,100,50)
  surface2.shapeColor="Green"
   surface3 = createSprite(240,400,100,50)
   surface3.shapeColor="skyBlue"
   surface4 = createSprite(340,400,100,50)
   surface4.shapeColor="Pink"
   ball = createSprite(200,180,30,30)
ball.shapeColor="yellow"
ball.velocityX=-8
ball.velocityY=10



}

function draw() {
  music.play()
    background(rgb(255,25,5));
    if(ball.isTouching(surface1)){
      ball.shapeColor = "blue"
    music.play();

    }else if(ball.isTouching(surface2)){
      ball.shapeColor = "green"
    music.play();

    }
    else if(ball.isTouching(surface3)){
      ball.shapeColor = "skyBlue"
    music.play();

    }
    else if(ball.isTouching(surface4)){
      ball.shapeColor  = "pink"
    music.play();

    }

    edges = createEdgeSprites()
  ball.bounceOff(edges)
  ball.bounceOff(surface1)
  ball.bounceOff(surface2)
  ball.bounceOff(surface3)
  ball.bounceOff(surface4)




  drawSprites()
}
