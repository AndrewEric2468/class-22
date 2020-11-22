const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ob1;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  ob1_options = {
    isStatic : true
  }
  ob1 =  Bodies.rectangle(200,400,400,20, ob1_options);
  
  World.add(world, ob1);

  console.log(ob1.position);

  var ball_options = {
    restitution : 1
  }
  ball = Bodies.circle(200,100,10,ball_options);
  World.add(world, ball)
}
 
function draw() {
  background("salmon");  
         
      Engine.update(engine);
  rectMode(CENTER);
  rect(ob1.position.x, ob1.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);
  drawSprites();
}