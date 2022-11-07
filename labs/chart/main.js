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
		this.options = options;
		this.canvas = options.myCanvas;
		this.c = this.canvas.getContext("2d");
		this.data = options.data;
		this.maxValue = 25;
	}

	drawGridLines() {
		var canvasActualHeight = this.canvas.height - this.options.padding * 2;
		var canvasActualWidth = this.canvas.width - this.options.padding * 2;

		var gridValue = 0;
		while(gridValue <= this.maxValue) {
			var gridX = canvasActualHeight * (1 - gridValue / this.maxValue) + this.options.padding;
			drawLine(
				this.c,
				0,
				gridX,
				this.canvas.width,
				gridX,
				this.options.gridColor
			);
			drawLine(
				this.c,
				15,
				this.options.padding/2,
				15,
				gridX + this.options.padding/2,
				this.options.gridColor
			  );
		 
			  // Writing grid markers
			  this.c.save();
			  this.c.fillStyle = this.options.gridColor;
			  this.c.textBaseline = "bottom";
			  this.c.font = "bold 10px Arial";
			  this.c.fillText(gridValue, 0, gridX - 2);
			  this.c.restore();
		 
			gridValue += this.options.gridScale;
		}
		
	}

	drawBars() {
		drawBar(
			c,
			100, // x coordinate
			200, // y coordinate
			15, //quanitity
			50, // size of the bar
			fruit[0].color
		)
	}

	draw() {
		this.drawGridLines();
		this.drawBars();
	}
}

var myBarchart = new BarChart({
	myCanvas: canvas,
	padding: 40,
	gridScale: 5,
	gridColor: "black",
	data: fruit
});

myBarchart.draw()
