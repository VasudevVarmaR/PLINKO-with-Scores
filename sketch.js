const Events = Matter.Events;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var score = 0;
var turn = 0;
var gameState = "play";
var particle;
var line;


function setup() 
{
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  for(var k = 0; k <=width;k = k+80)
  {
    divisions.push(new Division(k,height-devisionHeight/2,10,devisionHeight));
  }

  for(var j = 40; j <=width; j=j+60)
  {
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <=width-10; j=j+60)
  {
    plinkos.push(new Plinko(j,175));
  }

  for(var j=40; j <=width; j=j+60)
  {
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 15; j <=width-10; j=j+60)
  {
    plinkos.push(new Plinko(j,375));
  }

  ground = new Ground(549,793,1098,10);

  //line = new Ground(400,450,800,5);
  
}


var plinkos = [];
var divisions = [];
var particles = [];

var devisionHeight=300; 

function draw() 
{
  background(0);
  Engine.update(engine);

  if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-40,width/2+40),10,10));
  }

  for(var p = 0; p < particles.length; p++)
  {
    particles[p].display();
  }

  for (var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++)
  {
    plinkos[j].display();
  }

  for(var j = 0; j < plinkos.length; j++)
  {
    plinkos[j].display();
  }


  ground.display();
  //line.display();

  textSize(30);
  text("Score : "+score,50,30);

  text("500",20,520);
  text("500",100,520);
  text("500",180,520);
  text("500",260,520);
  text("200",740,520);
  text("200",660,520);
  text("200",570,520);
  text("100",330,520);
  text("100",500,520);
  text("100",410,520);

 if(particle!=null)
 {
   particle.display();

   if(particle.body.position.y>760)
   {
     if(particle.body.position.x<300)
     {
       score=score+500;
       particle=null;
       if(count>=5)
       gameState="end";
     }
   }
 }
 
  
}

function mousePressed()
{
  if(gameState!=="end")
  {
    count++;
    particle=new Particle(mouseX,10,10,10);
  }
}