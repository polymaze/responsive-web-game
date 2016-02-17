

// Create the main game div
/* Have this load canvas elements in 
   .ourGame instead */
var section = document.createElement("section");
section.id = 'ourGame';
document.body.appendChild(section);


// Create the ourGame canvas layers
var canvasLayers = ["map", "player"];

for (var i = 0; i < canvasLayers.length; i++) {
  // Tag the canvas elements
  var canvasId = canvasLayers[i];

  // Create the canvas
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  section = document.getElementById("ourGame");
  canvas.id = canvasId;
  /* http://stackoverflow.com/questions/2242086/
  how-to-detect-the-screen-resolution-with-javascript */
  // canvas.height = screen.height;
  // canvas.width = screen.width;
  section.appendChild(canvas);
}


// Start the game