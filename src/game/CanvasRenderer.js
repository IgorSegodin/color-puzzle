// TODO remove if not needed
export default class CanvasRenderer {

    /**
     * @param ctx {CanvasRenderingContext2D}
     * @param pixelPerUnit
     */
    constructor({ctx, pixelPerUnit = 10}) {
        this._ctx = ctx;
        this.pixelPerUnit = pixelPerUnit;
    }

    clean() {
        const ctx = this._ctx;
        ctx.fillStyle = 'rgb(0, 0, 0)';

        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    drawGlass() {

    }
}