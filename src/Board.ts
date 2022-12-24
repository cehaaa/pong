import Canvas from "./Canvas";

class Board extends Canvas {
	constructor() {
		super();
	}

	init(): void {
		this.drawField();
		this.drawNet();
	}

	drawBoard(): void {
		const canvas = document.createElement("canvas");
		canvas.setAttribute("id", "canvas");

		canvas.width = this.width;
		canvas.height = this.height;

		this.app.appendChild(canvas);
	}

	drawField(): void {
		this.ctx.beginPath();
		this.ctx.rect(0, 0, this.width, this.height);
		this.ctx.fillStyle = "#000";
		this.ctx.fill();
		this.ctx.closePath();
	}

	drawNet(): void {
		this.ctx.beginPath();

		this.ctx.setLineDash([20, 11]);
		this.ctx.moveTo(this.width / 2, 5);
		this.ctx.lineTo(this.width / 2, this.height);

		this.ctx.strokeStyle = "#fff";
		this.ctx.stroke();
		this.ctx.closePath();
	}

	clear(): void {
		this.ctx.clearRect(0, 0, this.width, this.height);
	}
}

export default Board;
