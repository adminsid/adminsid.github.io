// Step 1 - Find the canvas Element
var canvas = document.getElementById('mycanvas');
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight-50);
// Step 2 - Create a Drawing Object
var context = canvas.getContext("2d");
// Step 3 - Draw on the Canvas
function day() {
    background(); 
    drawSun();
    cloud(150,300)
    cloud(700,200)
    house();
    context.font = "30px Arial";
    context.fillStyle = "black"
    context.fillText("DAY", 500, 50);
}

function background() {
    context.beginPath();
    context.rect(0, 0, 700, 600);
    context.fillStyle = "deepskyblue";
    context.fill();
}

function drawSun() {

    context.beginPath();
    context.arc(0, 0, 100, 0, 2 * Math.PI, true);
    context.fillStyle = "yellow";
    context.fill();
 

    context.lineWidth = 5;
    context.strokeStyle = "orange";
    context.stroke();
}

function cloud(x,y){
    context.save();
    context.scale(0.55,0.55);
    context.shadowColor = "grey";
    context.shadowOffsetX = -5;
    context.beginPath();
    context.arc(x, y, 60, Math.PI * 0.5, Math.PI * 1.5);
    context.arc(x + 70, y - 60, 70, Math.PI * 1, Math.PI * 1.85);
    context.arc(x + 152, y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
    context.arc(x + 200, y, 60, Math.PI * 1.5, Math.PI * 0.5);
    context.moveTo(x + 200, y + 60);
    context.lineTo(x, y + 60);
    context.fillStyle = 'white';
    context.fill()
    context.restore();
}

function drawTriangle(x, y, color) {
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 100, y-100);
    context.lineTo(x + 200, y);
    context.fill();
}



function drawSquare(x,y,width,height,lineWidth,strokeStyle,fillStyle) {
    context.beginPath();
    context.rect(x, y, width, height);
    context.closePath();

    // the outline
    context.lineWidth = lineWidth;
    context.strokeStyle = strokeStyle;
    context.stroke();
 
    // the fill color
    context.fillStyle = fillStyle;
    context.fill();
}

function house() {
    drawTriangle(200, 400, "black");

   drawSquare(200,400,200,199,2,"black","chocolate")

   drawSquare(275,500,60,99,2,"black","cornsilk")

   drawSquare(225,425,50,50,2,"black","cornsilk")

   drawSquare(325,425,50,50,2,"black","cornsilk")

  // drawFence(700, 550);
   for (let i = 20; i< 700; i++){
    drawFence(i,550);
    i+=50;
   } 
}

function drawFence(x,y) {
    context.beginPath();
    context.rect(x,y,20,50);
    context.closePath();
    context.lineWidth = 1;
    context.stroke();
    context.fillStyle = "brown";
    context.fill();

}

function night() {
    backgroundNight();
    drawMoon();
    mountains();
    context.font = "30px Arial";
    context.fillStyle = "white"
    context.fillText("NIGHT", 705, 50);
    for(let i=0;i<100;i++) {
        context.fillText("*", 700 + Math.random()*700,60+Math.random()*300);
    }
}

function backgroundNight() {
    context.beginPath();
    context.rect(700, 0, 700, 600);
    context.fillStyle = "black";
    context.fill();
}

function drawMoon() {
    context.lineWidth = 2;
    context.beginPath();
    context.arc(1300, 100, 85, 0, Math.PI * 2, true);
    context.fillStyle = "white";
    context.fill();
}

function mountains() {

    //biggest mountain
    context.beginPath()
    context.moveTo(700, 600)
    context.lineTo(950, 200)
    context.lineTo(1200, 600)
    context.fillStyle = "dimgrey"
    context.fill();
    context.closePath()

    // "snow" on the biggest mountain
    context.beginPath()
    context.moveTo(888, 300)
    context.lineTo(950, 200)
    context.lineTo(1012, 300)
    context.fillStyle = "gainsboro"
    context.fill();
    context.closePath()

    //Middle mountain
    context.beginPath()
    context.moveTo(900, 600)
    context.lineTo(1100, 300)
    context.lineTo(1300, 600)
    context.fillStyle = "grey"
    context.fill();
    context.closePath()

    // "snow" on middle mountain
    context.beginPath()
    context.moveTo(1034, 400)
    context.lineTo(1100, 300)
    context.lineTo(1166, 400)
    context.fillStyle = "gainsboro"
    context.fill();
    context.closePath()

    // smallest mountain
    context.beginPath()
    context.moveTo(800, 600)
    context.lineTo(925, 400)
    context.lineTo(1075, 600)
    context.fillStyle = "darkgray"
    context.fill();
    context.closePath()

    // "snow" on smallest mountain
    context.beginPath()
    context.moveTo(875, 480)
    context.lineTo(925, 400)
    context.lineTo(985, 480)
    context.fillStyle = "gainsboro"
    context.fill();
    context.closePath()
    
}

function ground () { 
    //morning ground
    context.beginPath();
    context.rect(0, 600, 700, 50);
    context.fillStyle = "green";
    context.fill();
    context.closePath();

    //night ground
    context.beginPath();
    context.rect(700, 600, 1400, 50);
    context.fillStyle = "forestgreen";
    context.fill();
    context.closePath();
}

day();
night();
ground();