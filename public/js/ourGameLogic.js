
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
var canvasLayers = ["background", "player", "effects"];
var canvasLayer = canvasLayers.length;

for (var i = 0; i < canvasLayer; i++) {
  // Tag the canvas elements
  /*
    Why is this only logging the background layer?
  */
  var canvasId = canvasLayer[i];

  // Create the canvas
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  div = document.getElementById("ourGame");
  canvas.id = canvasId;
  // http://stackoverflow.com/questions/2242086/how-to-detect-the-screen-resolution-with-javascript
  canvas.height = screen.height;
  canvas.width = screen.width;
  div.appendChild(canvas);
}