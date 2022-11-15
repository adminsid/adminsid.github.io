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

function animate() {
    c.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    // c.drawImage(image, sx, sw, sh, dx, dy, dh);
    c.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if (gameFrame % staggerFrames == 0) {
        if(frameX < 14) frameX++;
        else frameX = 0;
    }

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();