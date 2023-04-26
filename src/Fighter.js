export class Fighter {
    constructor(name, x, y, velocity) {
        this.name = name;
        this.image = new Image();
        this.position = {x, y};
        this.velocity = velocity;
    }

    update(context) {
        this.postion.x += this.velocity;

        if (this.postion.x > context.canvas.width - this.image.width ||  this.postion.x < 0) {
            this.velocity = -this.velocity;
        }
    }

    draw(context) {
        context.drawImage(this.image, this.postion.x, this.postion.y);
    }
}