// TODO remove if not needed
import CanvasRenderer from "@/game/CanvasRenderer";

export default class Game {
    constructor({canvasEl}) {
        this._canvasEl = canvasEl;

        // TODO calc size appropriately
        // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        // console.log(vw);
        // console.log(vh);

        this._canvasEl.width = 800;
        this._canvasEl.height = 600;

        this.canvasRenderer = new CanvasRenderer({
            ctx: this._canvasEl.getContext("2d")
        });

        this.canvasRenderer.clean();



    }
}