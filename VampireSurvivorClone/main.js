var keys = {};

window.addEventListener('load', function () {
    

    const newPlayer = new Player();

    checkKeyInput();
    gameLoop();

    function gameLoop() {
        
        Render();

        newPlayer.Update();
        

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