class ScoreManager {
    constructor() {
        this.score = 0;
        this.health = 100;
    };

    getScore() {
        return this.score;
    }

    adjustScore(points) {
        this.score = this.score + points;
    }

    getHealth(){
        return this.health;
    }

    adjustHealth(hp){
        this.health = this.health + hp;
    }

}