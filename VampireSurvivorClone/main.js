var keys = {};

const newPlayer = new Player();

const newEnemy = new Enemy(300, 500);
const newEnemy2 = new Enemy(600, 100);

checkKeyInput();
Init();
gameLoop();



function Init(){
}

function gameLoop() {

    Render();

    newPlayer.Update();
    newEnemy.Update();
    newEnemy2.Update();

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


