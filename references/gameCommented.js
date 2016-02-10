// define game variables
// global variables
// height and width of canvas
var width = 320,
    height = 500,
    
    // game loop
    gLoop,
    
    // canvas element
    c = document.getElementById('c'),
    
    // 2d graphical context of the
    // canvas, the only one supported by all
    // browswer for now
    ctx = c.getContext('2d');
    
    // setting canvas size
    c.width = width;
    c.height = height;

// clearing the canvas
var clear = function(){
  
  //set active color to #d0e... (nice blue)
  //UPDATE - as 'Ped7g' noticed - using clearRect() in here is useless, we cover whole surface of the canvas with blue rectangle two lines below. I just forget to remove that line
  //ctx.clearRect(0, 0, width, height);
  //clear whole surface
  ctx.fillStyle = '#d0e7f9';
  
  // start drawing
  ctx.beginPath();
  
  // draw rectangle from point (0, 0) to
  // (width,height) covering whole canvas
  ctx.rect(0, 0, width, height);
  
  // end drawing
  ctx.closePath();
  
  // fill rectangle with active
  // color selected before
  ctx.fill();
}

// add some clouds
var howManyCircles = 10, circles = [];

// start a loop
// for counting clouds
for (var i = 0; i < howManyCircles; i++)

  //add information about circles into
  //the 'circles' Array. The x & y positions, 
  //radius from 0-100 and transparency 
  //from 0-0.5 (0 is invisible, 1 no transparency)
  circles.push([Math.random() * width, Math.random() * height, Math.random() * 100, Math.random() / 2]);

var DrawCircles = function(){
  for (var i = 0; i < howManyCircles; i++) {
    
    // white color with transparency i rgba
    ctx.fillStyle = 'rgba(255, 255, 255, ' + circles[i][3] + ')';
    
    // arc(x, y, radius, startAngle, endAngle, anticlockwise)
    // circle has always PI*2 end angle
    ctx.beginPath();
    ctx.arc(circles[i][0], circles[i][1], circles[i][2], 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  }
};

// animate the clouds
var MoveCircles = function(e){
  for (var i = 0; i < howManyCircles; i++){
    
    // the circle is under the screen so we change
    // information about it
    if (circles[i][1] - circles[i][2] > height) {
      circles[i][0] = Math.random() * width;
      circles[i][2] = Math.random() * 100;
      circles[i][1] = 0 - circles[i][2];
      circles[i][3] = Math.random() / 2;
    } else {
      // move circle e pixels down  
      circles[i][1] += e;
    }
  }
};

var GameLoop = function(){
  clear();
  MoveCircles(5);
  DrawCircles();
  gLoop = setTimeout(GameLoop, 1000 / 50);
};

GameLoop();