class UIManager {
    constructor() {

         this.cBtn = {
            x: 10,
            y: 110,
            w: 80, 
            h: 80
        };

        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");  

        this.handleClick = this.handleClick.bind(this);    
        
        // Add event listener to handle clicks on the canvas
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
        //ctx.clearRect(0, 0, canvas.width, canvas.height);

    

        ctx.fillStyle = '#ccc';
        ctx.fillRect(this.cBtn.x, this.cBtn.y, this.cBtn.w, this.cBtn.h);

        //ctx.fillStyle = '#000';
        //ctx.font = '20px Arial';
        //ctx.fillText('Click Me', 50, 30);
    }

    // Function to handle button click
    handleClick(event) {
        const rect = canvas.getBoundingClientRect();
        const clickx = event.clientX - rect.left;
        const clicky = event.clientY - rect.top;

       

        //console.log(this.yolo)
        
        // Check if click is within the button area
        if (clickx > this.cBtn.x && 
            clickx < this.cBtn.x + this.cBtn.w && 
            clicky > this.cBtn.y && 
            clicky < this.cBtn.y + this.cBtn.h) {
            // Execute your desired functionality here
            
            // Add your code to execute on button click
             console.log('Button clicked!');
             weaponManager.addObject(new KnifeManager());
        }
    }


    

    // Initially draw the button on the canvas

}