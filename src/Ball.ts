import Canvas from "./Canvas";
import Score from "./Score";

interface Paddle {
	x: number;
	y: number;
	width: number;
	height: number;
}

export class Ball extends Canvas {
	x: number;
	y: number;

	dx: number;
	dy: number;

	radius: number;

	score: Score;

	constructor(score: Score) {
		super();

		this.radius = 10;

		this.x = this.width / 2;
		this.y = this.height / 2;

		this.dx = 4;
		this.dy = 4;

		this.score = score;
	}

	draw(paddle: Paddle): void {
		const { PI } = Math;

		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.radius, 0, 2 * PI);
		this.ctx.fillStyle = "#fff";
		this.ctx.fill();
		this.ctx.closePath();

		this.collideBoard();
		this.collidePaddle(paddle);

		this.x -= this.dx;
		this.y -= this.dy;
	}

	collideBoard(): void {
		if (this.x + this.radius <= this.radius) {
			this.x = this.width / 2;
			this.y = this.height / 2;

			this.score.addScore();
		}

		if (this.x + this.radius >= this.width) {
			this.dx = this.dx * -1;
		}

		if (this.y + this.radius <= this.radius) {
			this.dy = this.dy * -1;
		}

		if (this.y + this.radius >= this.height) {
			this.dy = this.dy * -1;
		}
	}

	collidePaddle(paddle: Paddle) {
		if (
			this.x + this.radius >= paddle.x &&
			this.x - this.radius <= paddle.x + paddle.width &&
			this.y + this.radius >= paddle.y &&
			this.y - this.radius <= paddle.y + paddle.height
		) {
			this.dx = this.dx * -1;
		}
	}
}

export default Ball;
