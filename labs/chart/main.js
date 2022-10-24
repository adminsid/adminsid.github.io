var fruit = [
	{name:"Strawberry", quantity:15, color:"red"},
	{name:"Peach", quantity:10, color:"orange"},
	{name:"Banana", quantity:25, color:"yellow"},
	{name:"Pear", quantity:10, color:"green"},
	{name:"Grape", quantity:20, color:"black"},

];

class BarChart {
	constructor(options) {
	  this.options = options;
	  this.canvas = options.canvas;
	  this.ctx = this.canvas.getContext("2d");
	  this.colors = options.colors;
	  this.titleOptions = options.titleOptions;
	  this.maxValue = Math.max(...Object.values(this.options.data));
	}

}