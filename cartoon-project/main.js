// Step 1 - Find the canvas Element
var canvas = document.getElementById('mycanvas');
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight-50);
console.log(canvas);
// Step 2 - Create a Drawing Object
var ctx = canvas.getContext("2d");
console.log(ctx);
ctx.fillStyle = "white";
// Step 3 - Draw on the Canvas
draw();
roundedRect(ctx, 100,100,200,400,50);

function draw(){
    text();
}




// write some canvas text.
function text() {
    ctx.font = "60px Arial";
    ctx.fillText("Day Night", 100, 50);
    
}
    
// function for rounded rectangle
function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
  }

// Sun, Moon, Clouds, Water, Mountains, Trees, and/or other background objects

// Ground color

// Living Quarters with details (windows, door, etc). Could be a boat, tent, house, spaceship, etc.

// Use a for loop to draw grass, rocks, fence, ladder, or some other receptive item in the cartoon.