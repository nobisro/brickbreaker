function Paddle() {
    this.w = 160;
    this.h = 20;

    this.isMovingLeft = false;
    this.isMovingRight = false;

    this.pos = createVector(width / 2, height - 40);
    //what does createVector do?

    this.display = function() {
        fill(123, 104, 238, 100);
        rect(this.pos.x, this.pos.y, this.w, this.h);
        //this.pos.x?
    }

    this.move = function(step) {
        this.pos.x += step;
    }

    this.update = function() {
        if (this.isMovingRight) {
            this.move(20)
        } else if (this.isMovingLeft) {
            this.move(-20);
        }
    }

    this.checkEdges = function() {
        if (this.pos.x < 0) this.pos.x = 0;
        else if (this.pos.x > width - this.w) this.pos.x = width - this.w;
    }
}