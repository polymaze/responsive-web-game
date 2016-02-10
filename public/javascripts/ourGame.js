

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.id = 'ourGame';
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Add a button in canvas
ctx.fillStyle = 'black';
ctx.font = 'italic bold 30px sans-serif';
ctx.textBaseline = 'bottom';
ctx.textAlign = 'contextcenter';
// Need to use measure text
ctx.fillText("Click for fullscreen!",20,100);

// Make it bigger
function fullscreen(){
var el = document.getElementById('ourGame');

   if(el.webkitRequestFullScreen) {
       el.webkitRequestFullScreen();
   }
  else {
     el.mozRequestFullScreen();
  }            
}
document.getElementById('ourGame').addEventListener("click",fullscreen);
























// Reset the game when the player catches a monster
var reset = function () {};

// Update game objects
var update = function (modifier) {};

// Draw everything
var render = function () {};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();