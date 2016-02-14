// canvas.js
/* 
  canvas functions and variables
*/
var canvaslayers = ["background","player"];
var canvaslayerslength = canvaslayers.length;

for (var i = 0; i < canvaslayerslength; i++) {
  alert(canvaslayers[i]);

  // Canvas Settings
  var canid = function() {
    canid = "ourGameCanvas";
  };
  var screen = function(height, width) {
    screen.height = 420;
    screen.width = 512;
  }

  // Create the canvas
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.id = canid;
  canvas.height = screen.height;
  canvas.width = screen.width;
  document.body.appendChild(canvas);
}