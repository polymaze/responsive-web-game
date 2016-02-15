
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

for (var layer = 0; layer < canvaslayerslength; layer++) {
  // alert(canvaslayers[i]);

  // Identify the canvas
  /* Make this pull from the canvaslayer array */
  var canvasId;

  // Create the canvas
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  div = document.getElementById("ourGame");
  canvas.id = canvasId;
  canvas.height = screen.height;
  canvas.width = screen.width;
  div.appendChild(canvas);
}