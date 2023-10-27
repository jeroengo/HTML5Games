var ball = {
    x: 150,
    y: 50,
    width: 50,
    height: 50,
    speed: 5,
    velocity: 0,
    jumpStrength: 15,
    gravity: 1,
    isJumping: false
};

function drawBall() {
    ctx.fillStyle = "pink";
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height);

    Collision(ball);   
}

