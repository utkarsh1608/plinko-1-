const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var i,j,k,l;
var plinkos, ground, divisions, particles;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 40);
  groundLeft = new Ground(5, height/2 , 10, height);
  groundRight = new Ground(width - 5, height/2, 10, height);

  plinkos = [];
  for(i = 20; i < 480; i = i + 65){
    for(k = 0; k < 6; k ++){
      plinkos.push( new Plinko(i, k*80 + 40) );
    }
    
  }
 
  for(i = 40; i < 480; i = i + 65){
    for(k = 0; k < 6; k ++){
      plinkos.push( new Plinko(i, k*80 + 80) );
    }
      
  }

  divisions = [];
  for (i = 0; i < 10; i ++){
    divisions.push(new Ground(i* 52 + 5, 660, 10, 240));
  }
  
  particles = [];
  
  
  // particles = new Particle( random(10, 470), 0);
  
}

function draw() {
  Engine.update(engine);

  background("black");  
  


  for(j = 0; j < plinkos.length; j ++){
    
    plinkos[j].display();
  }
  

  for(l = 0; l < divisions.length; l ++){
     divisions[l].display();
  }
  
  ground.display();
  groundLeft.display();
  groundRight.display();

  if(frameCount % 60 == 0){
    particles.push( new Particle( random(10, 470), 0));
    console.log("hi");
  }

  for(i= 0; i < particles.length; i ++){
    particles[i].display();
 }
}