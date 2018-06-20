let paddle;
let ball;
let bricks = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    paddle = new Paddle();
    ball = new Ball();

    for (let i = 0; i < 20; i++) {
        bricks.push(new Brick());
    }
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

    for (let j = 0; j < bricks.length; j++) {
        if (ball.hits(bricks[j])) {
            if (bricks[j].r > 40) {
                bricks[j].r = bricks[j].r /2
            } else {
                bricks.splice(j, 1); 
            }
            ball.direction.y *= -1;
        }
        bricks[j].display();
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




