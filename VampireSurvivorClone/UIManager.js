class UIManager {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
    }

    Update() {
        this.DisplayScore();
    }

    DisplayScore() {
        this.ctx.font = "bold 30px Arial";
        this.ctx.fillText(scoreManager.getScore(), 50, 50);
    }
}