var hypnoticBall, database;
var position;
var drawing = [];
var x, y;
function setup(){
  

  console.log(database);
  createCanvas(500,500);
}
function draw(){
  background("black")
  for(var i = 0;i<drawing.length; i++){
       strokeWeight(10);
       stroke("purple")
       point(drawing[i].x,drawing[i].y)
  }
 
}

function mouseDragged(){
      var point1={x:mouseX,y:mouseY};
       drawing.push(point1)

     
}

