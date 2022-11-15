const canvas = document.getElementById("mycanvas");
const c = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'spritesheet.png';
const spriteWidth = 268;
const spriteHeight = 209;

function animate() {
    c.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    // c.drawImage(image, sx, sw, sh, dx, dy, dh);
    c.drawImage(playerImage, 0, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    requestAnimationFrame(animate);
};
animate();