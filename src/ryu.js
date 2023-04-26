const ryu = document.querySelector('img[alt="ryu"]');

const postion = {
    x: 80,
    y: 110,
}

let velocity = -2;

export function updateRyu(context) {
postion.x += velocity;

if (postion.x > context.canvas.width - ryu.width ||  postion.x < 0) {
    velocity = -velocity;
}
}
export function drawRyu(context) {
context.drawImage(ryu, postion.x, postion.y);
}