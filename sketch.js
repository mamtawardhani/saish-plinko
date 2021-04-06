var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

///////////////////////
var divisions = [];
var part;
var count = 0;
var gs = "start";
//////////////////////

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) {    
      plinkos.push(new Plinko(j,375));
    }
    
}

function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  text("Count : "+count, 200, 30)
  textSize(20);

  //from left
  // 1
  text("500", 20, 550);
  textSize(20);

  // 2
  text("500", 100, 550);
  textSize(20);

  // 3
  text("500", 180, 550);
  textSize(20);

  // 4
  text("100", 260, 550);
  textSize(20);

  // 5 
  text("100", 340, 550);
  textSize(20);

  // 6
  text("100", 420, 550);
  textSize(20);

  // 7 
  text("100", 500, 550);
  textSize(20);

  // 8 
  text("200", 580, 550);
  textSize(20);

  // 9
  text("200", 660, 550);
  textSize(20);

  // 10
  text("200", 740, 550);
  textSize(20);

  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) { 
     plinkos[i].display();
   }

   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}

  //for (var j = 0; j < particles.length; j++) {
     //particles[j].display();
   //}

   for (var k = 0; k < divisions.length; k++) {  
     divisions[k].display();
   }

   if(part!= null && gs==="start") {
    part.display();

    if(part.body.position.y>750) {
      if(part.body.position.x<250 && part.body.position.x>20) {
        score = score+500;
        part = null;
      }

      else if(part.body.position.x<550 && part.body.position.x>251) {
        score = score+100;
        part = null;
      }

      else if(part.body.position.x<800 && part.body.position.x>551) {
        score = score+200;
        part = null;
      }


      //else if(part.body.position.x<1350 && part.body.position.x>901) {
        //score = score+1000;
        //part = null;
      //}
    }
    
   } 
   
   if(count> 5) {
    gs = "end";
    text("game over", 200, 225);
    textSize(50);
    
  }
  
}


function mousePressed() { 
  if(gs==="start"){
    part = new Particle(mouseX, 10, 10);
    count = count + 1;
  }
  
}

