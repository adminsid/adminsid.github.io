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

function drawLine(c, startX, startY, endX, endY, color) {
	c.save();
	c.strokeStyle = color;
	c.beginPath();
	c.moveTo(startX, startY);
	c.lineTo(endX, endY);
	c.stroke();
	c.restore();
}

function drawBar(c, upperLeftCornerX, upperLeftCornerY, width, height, color) {
	c.save();
	c.fillStyle = color;
	c.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
	c.restore();
}

function drawText (c, text, x, y) {
	c.save();
	c.font = '30px Arial';
	c.fillStyle = "blue";
	c.fillText(text, x, y);
	c.restore();
}

class BarChart {
	constructor(options) {
		this.options = options;
		this.canvas = options.myCanvas;
		this.c = this.canvas.getContext("2d");
		this.colors = options.colors;
		this.data = options.data;
		this.maxValue = 25;
		this.titleOptions = options.titleOptions;
	}

	drawGridLines() {
		var canvasActualHeight = this.canvas.height - this.options.padding * 2;
		var canvasActualWidth = this.canvas.width - this.options.padding * 2;

		var gridValue = 0;
		while (gridValue <= this.maxValue) {
			var gridX = canvasActualHeight * (1 - gridValue / this.maxValue) + this.options.padding;
			var gridY = canvasActualWidth * (1 - gridValue / this.maxValue) + this.options.padding;
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
				this.options.padding / 2,
				15,
				gridX + this.options.padding / 2,
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
		var canvasActualHeight = this.canvas.height - this.options.padding * 2;
		var canvasActualWidth = this.canvas.width - this.options.padding * 2;
		var barIndex = 0;
		var numberOfBars = Object.keys(this.options.data).length;
		var barSize = canvasActualWidth / numberOfBars;
		var values = Object.values(this.options.data);
		var fruits = Object.keys(this.options.data);
		for(let val of values) {
			var barHeight = Math.round((canvasActualHeight * val) / this.maxValue)
			drawBar(
				this.c,
				this.options.padding + barIndex * barSize,
				this.canvas.height - barHeight - this.options.padding,
				barSize,
				barHeight,
				this.colors[barIndex % this.colors.length]
			  );			
			barIndex++;
		}
		barIndex=0;
		for(let x in this.data) {
			drawText(
				this.c,
				x,
				this.options.padding + barIndex * barSize +10,
				600
			)
			barIndex++;
		}
		
	}

	drawLabel() {
		this.c.save();
	 
		this.c.textBaseline = "bottom";
		this.c.textAlign = this.titleOptions.align;
		this.c.fillStyle = this.titleOptions.fill;
		this.c.font = `${this.titleOptions.font.weight} ${this.titleOptions.font.size} ${this.titleOptions.font.family}`;
	 
		let xPos = this.canvas.width / 2;
	 
		if (this.titleOptions.align == "left") {
		  xPos = 10;
		}
		if (this.titleOptions.align == "right") {
		  xPos = this.canvas.width - 10;
		}
	 
		this.c.fillText(this.options.seriesName, xPos, this.canvas.height);
	 
		this.c.restore();
	}

	draw() {
		this.drawGridLines();
		this.drawBars();
		this.drawLabel();
	}
}

var myBarchart = new BarChart({
	myCanvas: canvas,
	seriesName: "Siddhartha Lama",
	padding: 40,
	gridScale: 5,
	gridColor: "black",
	data: {
		"Strawberry" : 15,
		"Peach" : 10,
		"Banana":25,
		"Pear":10,
		"Grape":20,
	},
	colors: ["red","orange","yellow","green","black"],
	
});

myBarchart.draw()
