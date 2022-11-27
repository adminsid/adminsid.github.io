const canvas = document.getElementById("mycanvas");
const c = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'spritesheet.png';
const spriteWidth = 268;
const spriteHeight = 209;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames  = 2;


function drawBubble(ctx, x, y, w, h, radius)
{
  var r = x + w;
  var b = y + h;
  ctx.beginPath();
  ctx.strokeStyle="white";
  ctx.lineWidth="3";
  ctx.moveTo(x+radius, y);
  ctx.lineTo(x+radius/2, y-10);
  ctx.lineTo(x+radius * 2, y);
  ctx.lineTo(r-radius, y);
  ctx.quadraticCurveTo(r, y, r, y+radius);
  ctx.lineTo(r, y+h-radius);
  ctx.quadraticCurveTo(r, b, r-radius, b);
  ctx.lineTo(x+radius, b);
  ctx.quadraticCurveTo(x, b, x, b-radius);
  ctx.lineTo(x, y+radius);
  ctx.quadraticCurveTo(x, y, x+radius, y);
  ctx.stroke();
}

function animate() {
    c.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    // c.drawImage(image, sx, sw, sh, dx, dy, dh);
     
    c.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 200, spriteWidth, spriteHeight);
    if (gameFrame % staggerFrames == 0) {
        if(frameX < 14) frameX++;
        else frameX = 0;
    }
    drawBubble(c,280,400,150,50,20);

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();