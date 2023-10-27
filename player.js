var player = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    speed: 5,
    velocity: 0,
    jumpStrength: 15,
    gravity: 1,
    isJumping: false
};

function drawPlayer() {
    //ctx.fillStyle = "red";
    //ctx.fillRect(player.x, player.y, player.width, player.height);
    const img = new Image(); // Create new img element
    img.src = "Tiles/Characters/tile_0000.png"; // Set source path
    ctx.drawImage(img, player.x, player.y,player.width,player.height);
}