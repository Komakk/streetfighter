import { drawKen, updateKen } from "./ken.js";
import { drawBackground } from "./stage.js";
import { drawRyu, updateRyu } from "./ryu.js";

const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
}

window.onload = function() {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    function frame() {
        updateKen(context);
        updateRyu(context);

        drawBackground(context);
        drawKen(context);
        drawRyu(context);

        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
}