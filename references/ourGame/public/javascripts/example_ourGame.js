
// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.id = 'ourGame';
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);


// Make it big
function fullscreen(){
var screen = document.getElementById('ourGame');
   if(screen.webkitRequestFullScreen) {
       screen.webkitRequestFullScreen();
   } else {
     screen.mozRequestFullScreen();
  }
}
document.getElementById('ourGame').addEventListener("click",fullscreen);


// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "http://www.psdgraphics.com/file/abstract-mosaic-background.png";

// Ship image
var shipReady = false;
var shipImage = new Image();
shipImage.onload = function () {
	shipReady = true;
};
shipImage.src = "images/ship.svg";

// Comet image
var cometReady = false;
var cometImage = new Image();
cometImage.onload = function () {
	cometReady = true;
};
cometImage.src = "images/comet.svg";


// Game objects
var ship = {
	speed: 256 // movement in pixels per second
};
var comet = {};
var cometsCollected = 0;


// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


// Reset the game when the player catches a comet
var reset = function () {
	ship.x = canvas.width / 2;
	ship.y = canvas.height / 2;

	// Throw the comet somewhere on the screen randomly
	comet.x = 32 + (Math.random() * (canvas.width - 64));
	comet.y = 32 + (Math.random() * (canvas.height - 64));
};


// Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		ship.y -= ship.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		ship.y += ship.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		ship.x -= ship.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		ship.x += ship.speed * modifier;
	}

	// Collision Detection
	if (
		ship.x <= (comet.x + 32)
		&& comet.x <= (ship.x + 32)
		&& ship.y <= (comet.y + 32)
		&& comet.y <= (ship.y + 32)
	) {
		++cometsCollected;
		reset();
	}
};


// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (shipReady) {
		ctx.drawImage(shipImage, ship.x, ship.y);
	}

	if (cometReady) {
		ctx.drawImage(cometImage, comet.x, comet.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Comets collected: " + cometsCollected, 32, 32);
};


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