var keys = {};

var playerpos = {x:0,Y:0};

var newPlayer={};

window.addEventListener('load', function () {
    

    const newPlayer = new Player();
    const newEnemy = new Enemy(300,500);
    const newEnemy2 = new Enemy(600,100);

    checkKeyInput();
    gameLoop();

    function gameLoop() {
        
        Render();

        newPlayer.Update();
        newEnemy.Update();
        newEnemy2.Update();
        
        playerpos.x = newPlayer.player.x;
        playerpos.y = newPlayer.player.y;

        requestAnimationFrame(gameLoop);
    }

    function checkKeyInput() {

        console.log("Key Input listener added");        

        document.addEventListener("keydown", function (event) {
            keys[event.code] = true;
        });

        document.addEventListener("keyup", function (event) {
            keys[event.code] = false;
        });
    }

    function Render() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }


})