import { Fighter } from "./fighter.js";

export class Ken extends Fighter {
    constructor(x, y, velocity) {

    }
}

const ken = document.querySelector('img[alt="ken"]');

const postion = {
    x: 80,
    y: 110,
}

let velocity = 2;

export function updateKen(context) {
postion.x += velocity;

if (postion.x > context.canvas.width - ken.width ||  postion.x < 0) {
    velocity = -velocity;
}
}
export function drawKen(context) {
context.drawImage(ken, postion.x, postion.y);
}