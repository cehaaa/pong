import Canvas from "./Canvas";

export class Paddle extends Canvas {
	x: number;
	y: number;

	velocity: number;

	paddleHeight: number;
	paddleWidth: number;

	constructor() {
		super();

		this.paddleHeight = 80;
		this.paddleWidth = 10;

		this.x = this.padding;
		this.y = this.height / 2 - this.paddleHeight / 2;

		this.velocity = 30;

		window.addEventListener("keydown", (e: KeyboardEvent) => {
			const key: string = e.key;

			if (key === "ArrowUp") {
				this.y -= this.velocity * 0.8;

				this.draw();
			}

			if (key === "ArrowDown") {
				this.y += this.velocity * 0.8;
				this.draw();
			}

			this.collide();
		});
	}

	draw(): void {
		this.ctx.beginPath();
		this.ctx.rect(this.x, this.y, this.paddleWidth, this.paddleHeight);
		this.ctx.fillStyle = "#fff";
		this.ctx.fill();
		this.ctx.closePath();
	}

	collide(): void {
		if (this.y < 0) {
			this.y = 0;
		}

		if (this.y + this.paddleHeight > this.height) {
			this.y = this.height - this.paddleHeight;
		}
	}
}

export default Paddle;
