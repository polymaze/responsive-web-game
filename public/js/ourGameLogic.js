
// Create the main game div
var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";
div.id = 'ourGame';
document.body.appendChild(div);


// Create the ourGame canvas layers
var canvasLayers = ["background", "player"];

for (var i = 0; i < canvasLayers.length; i++) {
  // Tag the canvas elements
  var canvasId = canvasLayers[i];

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