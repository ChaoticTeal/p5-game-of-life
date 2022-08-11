// Use a variable to define our canvas width and height
// This makes it easier to adjust and reference dimensions in code
let canvasDimensions = 500;
// The number of boxes in each row/column
let boxes = 100;
// A reference to the main canvas
let canvas;
// A Grid we'll initialize in setup()
let myGrid;

function setup(){
    // These colors are declared in grid.js and initialized here
    // Feel free to use different colors, I just like these!
    onColor = color(0, 200, 200);
    offColor = color(51, 30, 0);

    // Standard p5 setup
    canvas = createCanvas(canvasDimensions, canvasDimensions);
    background(0);
    noStroke();

    myGrid = new Grid(boxes, canvasDimensions);
}

function draw(){
    myGrid.display();
}

/**
 *  @TODO Define your functions below this point!
 *        You may need to call them in setup() and draw()
 *        once they're complete.
 */