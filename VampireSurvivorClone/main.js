var keys = {};

const objManager = new ObjManager();

const newPlayer = new Player();

const newSpawner = new enemySpawner();

const scoreManager = new ScoreManager();

const uiManager = new UIManager();


checkKeyInput();
Init();
gameLoop();



function Init(){
}

function gameLoop() {

    Render();

    newPlayer.Update();

    newSpawner.Update();

    objManager.UpdateAll();

    uiManager.Update();

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

function destroyObject(object){
    object = null;
}
