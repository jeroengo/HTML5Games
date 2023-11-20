class UIManager {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
    }

    Update() {
        this.DisplayScore();
        this.DisplayWeapons();
    }

    DisplayScore() {
        this.ctx.font = "bold 12px Arial";
        this.ctx.fillText("Kills: " + scoreManager.getScore(), 50, 50);
    }

    DisplayWeapons() {
        const wep = weaponManager.weapons.length;
        const str = wep.toString();

        this.ctx.font = "bold 12px Arial";
        this.ctx.fillText("Weapons: " + str, 50, 75);
    }
}