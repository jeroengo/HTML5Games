class UIManager {
    constructor() {

        this.knifeBttn = { x: 10, y: 110, w: 80, h: 80, canDisplay: true };
        this.bibleBttn = { x: 10, y: 210, w: 80, h: 80, canDisplay: true };

        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");

        this.handleClick = this.handleClick.bind(this);
        this.canvas.addEventListener('click', this.handleClick);
    }

    Update() {
        this.DisplayScore();
        this.DisplayHealth();
        this.DisplayWeapons();
        this.drawButton();
    }

    DisplayScore() {
        this.ctx.font = "bold 12px Arial";
        this.ctx.fillText("Kills: " + scoreManager.getScore(), 50, 50);
    }

    DisplayHealth() {
        this.ctx.font = "bold 12px Arial";
        this.ctx.fillText("Health: " + scoreManager.getHealth(), 50, 62);
    }

    DisplayWeapons() {
        const wep = weaponManager.weapons.length;
        const str = wep.toString();

        this.ctx.font = "bold 12px Arial";
        this.ctx.fillText("Weapons: " + str, 50, 75);
    }

    drawButton() {

        if (this.knifeBttn.canDisplay) {
            ctx.fillStyle = '#ccc';
            ctx.fillRect(this.knifeBttn.x, this.knifeBttn.y, this.knifeBttn.w, this.knifeBttn.h);

            ctx.fillStyle = 'black';
            ctx.font = '20px Arial';
            ctx.fillText('Click Me', this.knifeBttn.x, this.knifeBttn.y);
        }

        if (this.bibleBttn.canDisplay) {
            ctx.fillStyle = '#ccc';
            ctx.fillRect(this.bibleBttn.x, this.bibleBttn.y, this.bibleBttn.w, this.bibleBttn.h);
        }
    }

    // Function to handle button click
    handleClick(event) {

        //get where click has happened
        const rect = canvas.getBoundingClientRect();
        const clickx = event.clientX - rect.left;
        const clicky = event.clientY - rect.top;

        // Check knife Button check
        if (clickx > this.knifeBttn.x &&
            clickx < this.knifeBttn.x + this.knifeBttn.w &&
            clicky > this.knifeBttn.y &&
            clicky < this.knifeBttn.y + this.knifeBttn.h) {

            // Add your code to execute on button click
            console.log('knfieBttnW clicked!');
            weaponManager.addObject(new KnifeManager());
        }

        // Check knife Button check
        if (clickx > this.bibleBttn.x &&
            clickx < this.bibleBttn.x + this.bibleBttn.w &&
            clicky > this.bibleBttn.y &&
            clicky < this.bibleBttn.y + this.bibleBttn.h) {

            // Add your code to execute on button click
            console.log('bibleBttn clicked!');
            weaponManager.addObject(new BibleManager());
        }
    }
}