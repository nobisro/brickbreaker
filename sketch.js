let paddle;
let ball;
let bricks = [];
let playingGame = false;
let youWin = false;
let youLose = false;
let winText;

function setup() {
    createCanvas(windowWidth, windowHeight);

    paddle = new Paddle();
    ball = new Ball();
 

    for (let i = 0; i < 20; i++) {
        bricks.push(new Brick());
    }
    createText();
}

function draw() {
    background(250, 250, 210);
    
    //bricks
    paddle.display();
    if (playingGame) paddle.update();
    if (playingGame) paddle.checkEdges();

    ball.display();
    if (playingGame) ball.update();
    if (playingGame) ball.checkEdges();
    
    if (ball.meets(paddle) && ball.direction.y > 0) {
        ball.direction.y *= -1;
        console.log('paddle' + bricks.length);
    }

    for (var j = 0; j < bricks.length; j++) {
        bricks[j].display();
        if (ball.hits(bricks[j])) {
            if (bricks[j].r > 40) {
                bricks[j].r = bricks[j].r /2
            } else {
                bricks.splice(j, 1); 
                console.log(bricks.length);
            }
            ball.direction.y *= -1.035;
        } 
    }
    if (ball.pos.y > height) {
        playingGame = false;
        youLose = true;
        ball.pos = createVector(width / 2, height / 2);
        paddle.pos.x = width / 2;
        bricks = [];
        for (let i = 0; i < 20; i++) {
            bricks.push(new Brick());
        }
    }
    if (bricks.length === 0) {
        youWin = true;
        playingGame = false;
    }
    if (youWin) {
        winText.style('display', 'block');
    } else { winText.style('display', 'none');
    }

    if (youLose) {
        loseText.style('display', 'block');
        ball.direction.y = 1;
    } else { loseText.style('display', 'none')}

    if (playingGame === false) {
        rulesText.style('display', 'block')
    } else {rulesText.style('display', 'none')}

}

function keyPressed() {
    if (key === 'a' || key === 'A') {
        paddle.isMovingLeft = true;
    } else if (key === 'd' || key ==='D') {
        paddle.isMovingRight = true;
    } else if (key === 's' || key === 'S') {
        playingGame = true;
        youWin = false;
        youLose = false;
        if (bricks.length === 0) {
            for (let i = 0; i < 20; i++) {
            bricks.push(new Brick())
            }
        }
    }
}

function keyReleased() {
    paddle.isMovingLeft = false;
    paddle.isMovingRight = false;
}

function createText() {
    winText = createP('您贏了！！！');
    winText.position(width / 2 - 50, 80);
    loseText = createP('您輸了！！！');
    loseText.position(width/ 2 -50, 80);
    rulesText = createP("開始打 's', 往左打 'a', 往右打 'd'");
    rulesText.position(width / 2 - 150, 50);
}


