class ScoreManager {
    constructor() {
        this.score = 0;
    };

    getScore() {
        return this.score;
    }

    adjustScore(points) {
        this.score = this.score + points;
    }
}