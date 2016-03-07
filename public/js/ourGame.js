
window.onload = function() {
  ourGame();
};

var ourGame = function() {
    
  // Create the player
  var player = function() {
    console.log("player loaded");
  };
  
  // Load the map
  var map = [
    [1,1,1,1,1,1,1],
    [1,0,0,1,0,0,1],
    [1,0,0,0,0,0,1],
    [1,0,0,1,0,0,1],
    [1,1,1,1,1,1,1]
    ];
  
  // Create the board
  var board = function(location, map) {
    /*
      draw the map in this location
    */
    
    console.log("board loaded");
  };
  
  // Reset the game
  var reset = function() {
    console.log("game reset");
  };
  
  // Update the game
  var update = function() {
    player();
    board();
    console.log("game updated");
  };
  
  // Draw the game
  var draw = function() {
    console.log("game drawn");
  };
  
  // Game loop
  var gameLoop = function() {
    update();
    draw();
    console.log("game loop working");
  };
  
  gameLoop();
  
};