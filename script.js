var positionX = 0;
var positionY = 0;
var velocity = 100;
var reverse=true
var ball = document.getElementById('ball');
function moveBall() {

  var xmin =0;
  var xmax =700;
  if(reverse ===true){
    positionX=positionX + velocity;
    ball.style.left=positionX +"px";
    positionY=positionY + velocity;
    ball.style.top=positionY +"px";
    if(positionX >=xmax)
    {
      reverse=false;
    }
  }
  else{
    positionX=positionX - velocity;
    ball.style.left=positionX +"px";
    positionY=positionY - velocity;
    ball.style.top=positionY +"px";
    if(positionX==xmin)
    {
      reverse=true;
    }
  }
 
  
}
setInterval(moveBall, 100);
