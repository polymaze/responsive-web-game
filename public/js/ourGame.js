
// Start Preloader (<progress></progress>)
if (document.readyState == "complete" || document.readyState == "loaded") {
  // document is already ready to go
  // start the game
  ourGame();
} else {
  // document is not ready
  // start the preloader
  preloader();
  var preloader = function(){
    print = "Hello World, preloader";
  };
}

// Create function ourGame

  var ourGame = function(){

  // Create ourGame div
  var newSection = document.createElement("section");
  newSection.id = 'ourGame';
  document.body.appendChild(newSection);
  
  // Create canvas elements
  var newCanvas = document.createElement("canvas");
  var ctx = newCanvas.getContext("2d");
  newCanvas.id = 'ourGameCanvas';
  newCanvas.width = 512;
  newCanvas.height = s488;
  document.body.appendChild(newCanvas);
  
  // Get game rules (mode)

  // Get players (find/add)

  // Get map (generate or select)

  // Create canvas elements inside game div

  // Load the controllers

  // Initialize the hud
  
  // Create reset function
  
  // Create update function
  
  // Create draw function

  // Start game loop
	/*
	  Call from update.js 
	  Call from draw.js
	  Call from reset.js
	*/

// End ourGame(){
};