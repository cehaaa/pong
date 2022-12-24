interface CanvasProps {
	width: number;
	height: number;

	app: HTMLDivElement;
	canvas: HTMLCanvasElement;

	ctx: CanvasRenderingContext2D;
}

export class Canvas implements CanvasProps {
	app: HTMLDivElement;
	canvas: HTMLCanvasElement;

	width: number;
	height: number;
	padding: number;

	ctx: CanvasRenderingContext2D;

	constructor() {
		this.width = 600;
		this.height = 400;

		this.app = document.querySelector("#app")!;
		this.canvas = document.querySelector("#canvas")!;

		this.canvas.width = this.width;
		this.canvas.height = this.height;

		this.ctx = this.canvas.getContext("2d")!;

		this.padding = 16;
	}
}

export default Canvas;
