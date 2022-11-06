var fruit = [
	{ name: "Strawberry", quantity: 15, color: "red" },
	{ name: "Peach", quantity: 10, color: "orange" },
	{ name: "Banana", quantity: 25, color: "yellow" },
	{ name: "Pear", quantity: 10, color: "green" },
	{ name: "Grape", quantity: 20, color: "black" },
];

var canvas = document.getElementById("myCanvas");
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight - 50);

var c = canvas.getContext("2d");

console.log(fruit);

function drawLine(c, startX, startY, endX, endY,color){
    c.save();
    c.strokeStyle = color;
    c.beginPath();
    c.moveTo(startX,startY);
    c.lineTo(endX,endY);
    c.stroke();
    c.restore();
}

function drawBar(c, upperLeftCornerX, upperLeftCornerY, width, height,color){
    c.save();
    c.fillStyle=color;
    c.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
    c.restore();
}

class BarChart{
	constructor (options) {
		
	}

	drawGridLines() {

	}

	drawBars() {
		drawBar(
			c,
			200,
			200,
			50,
			100,
			fruit[0].color
		)
	}

	draw() {
		this.drawGridLines();
		this.drawBars();
	}
}

var myBarchart = new BarChart({

});
myBarchart.draw()
