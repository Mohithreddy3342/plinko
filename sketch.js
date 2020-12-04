const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var stand1, stand2, stand3, stand4, stand5, stand6, stand7;
var particles = [];
var plinkos = [];
var stand=[];

function setup() {
  createCanvas(1050,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 780, 2100, 10);

  for (var s=0;s<=width; s=s+80){
     stand.push(new Division(s,675,10,200));
  }

  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,175,10));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,375,10));
     
  }

  

  
  
}

function draw() {
   background(0);

   Engine.update(engine);
   ground.depth=ground.depth+1;
   ground.display();
   for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  
  for (var i = 0; i < stand.length; i++) {
     
   stand[i].display();
   
 }
 
  if(frameCount%60===0){
   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
 }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

   

}