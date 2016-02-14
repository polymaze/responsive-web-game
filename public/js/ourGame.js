
// Create the div "ourGame"
var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";
div.id = 'ourGame';
document.body.appendChild(div);

// Create the ourGame canvas layers
/*
  Create these inside #ourGame
  Link layer names to canvas
*/
var canvaslayers = ["background","player"];
var canvaslayerslength = canvaslayers.length;

for (var i = 0; i < canvaslayerslength; i++) {
  // alert(canvaslayers[i]);

  // Canvas Settings
  var canvasId = function() {
    // Grab these from canvaslayers array
  };
  var screen = function(height, width) {
    screen.height = 420;
    screen.width = 512;
  };

  // Create the canvas
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.id = "ourGameCanvas";
  canvas.height = screen.height;
  canvas.width = screen.width;
  document.body.appendChild(canvas);
}