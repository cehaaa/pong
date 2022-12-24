export let score = 0;
export const MAX_SCORE = 3;

export class Score {
	score: number;
	maxScore: number;

	constructor() {
		this.score = 0;
		this.maxScore = 3;
	}

	addScore(): void {
		score++;
	}

	getScore(): number {
		return score;
	}
}

export default Score;
