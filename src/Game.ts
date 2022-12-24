import Canvas from "./Canvas";
import Paddle from "./Paddle";
import ComputerPaddle from "./ComputerPaddle";
import Board from "./Board";
import Ball from "./Ball";

import Score from "./Score";

export class Game {
	canvas: Canvas;
	computerPaddle: ComputerPaddle;
	paddle: Paddle;
	board: Board;
	ball: Ball;

	score: Score;

	constructor() {
		this.score = new Score();

		this.canvas = new Canvas();
		this.board = new Board();
		this.computerPaddle = new ComputerPaddle();
		this.paddle = new Paddle();
		this.ball = new Ball(this.score);
	}

	init(): void {
		const interval = setInterval(() => {
			this.board.clear();

			this.board.init();

			this.computerPaddle.draw();
			this.paddle.draw();

			const paddle = {
				x: this.paddle.x,
				y: this.paddle.y,
				width: this.paddle.paddleWidth,
				height: this.paddle.paddleHeight,
			};

			this.ball.draw(paddle);

			if (this.score.getScore() === 3) {
				clearInterval(interval);
			}
		}, 20);
	}
}

export default Game;
