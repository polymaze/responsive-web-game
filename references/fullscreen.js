
function draw(){
  // Get the canvas element form the page
var canvas = document.getElementById("canvas");

// Make a 2D context
var ctx = canvas.getContext("2d");

    //canvas.width = document.width;
    //canvas.heigth = document.height;
    ctx.fillStyle = 'black';
ctx.font = 'italic bold 30px sans-serif';
ctx.textBaseline = 'bottom';
    ctx.textAlign = 'contextcenter';
    //Need to use measure text
ctx.fillText("Click!",20,100);
}	

function fullscreen(){
var el = document.getElementById('canvas');

   if(el.webkitRequestFullScreen) {
       el.webkitRequestFullScreen();
   }
  else {
     el.mozRequestFullScreen();
  }            
}

document.getElementById('canvas').addEventListener("click",fullscreen)
