var bullet,wall,thickness
var speed, weight;


function setup(){
createCanvas(1600,400)
thickness=Math.random(22,83)
speed = Math.random(223,321)*50
weight=Math.random(30,52)*50
bullet = createSprite(50,200,100,5)

wall=createSprite(1200,200,thickness,height/2)
bullet.shapeColor="white"
bullet.velocityX = speed;
}

function draw(){
  background("black")
if(wall.x-bullet.x<(bullet.width-wall.width)/2)
{
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/thickness*thickness*thickness;
  if (deformation>10)
  {
    bullet.shapeColor="red" 
  }
  if(deformation<10)
  {
    bullet.shapeColor="green"
  }
}
drawSprites();
}

