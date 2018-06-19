let paddle;
let ball;

function setup() {
    createCanvas(windowWidth, windowHeight);
    paddle = new Paddle();
    ball = new Ball();
}

function draw() {
    background(200);

    paddle.display();
    paddle.update();
    paddle.checkEdges();

    ball.display();
    ball.update();
    ball.checkEdges();
    
    if (ball.meets(paddle) && ball.direction.y > 0) {
        ball.direction.y *= -1;
    }

}

function keyPressed() {
    if (key === 'a' || key === 'A') {
        paddle.isMovingLeft = true;
    } else if (key === 'd' || key ==='D') {
        paddle.isMovingRight = true;
    }
}

function keyReleased() {
    paddle.isMovingLeft = false;
    paddle.isMovingRight = false;
}




