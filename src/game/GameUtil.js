import MathUtil from "@/game/MathUtil";

export default {

    /*
            a
           _____
         /  |   \
        /   |h   \
       /α___|____β\
            b
     */

    /**
     * @param height
     * @param topWidth
     * @param angle
     * @return {number}
     */
    calcGlassBottomWidth: function ({height, topWidth, angle}) {
        /*
            a = b - h · (ctg α + ctg β)
         */
        return topWidth - height * (
            MathUtil.ctg(MathUtil.toRadians(angle)) * 2
        )
    },

    /**
     * @param height
     * @param bottomWidth
     * @param angle
     * @return {Number}
     */
    calcGlassTopWidth: function ({height, bottomWidth, angle}) {
        /*
            b = a + h · (ctg α + ctg β)
         */
        return bottomWidth + height * (
            MathUtil.ctg(MathUtil.toRadians(angle)) * 2
        )
    },

    /**
     * @param liquidArea
     * @param bottomWidth
     * @param angle
     * @return {Number}
     */
    calcLayerHeight: function ({liquidArea, bottomWidth, angle}) {
        /*
            Formula: h^2 · (ctg α + ctg β)/2 + h · a + S
            Where:
                a - bottom width of a glass (smaller, horizontal side of a trapeze)
                S - area of trapeze (liquid 2d volume), which will determine the height of liquid layer inside glass
                h - target height
                α, β - angles of the trapeze base
            Derived from: S = (a + b) · h / 2,
                            b = a + h · (ctg α + ctg β)
            Where:
                b - another, bigger (horizontal) side of a trapeze
         */
        return  MathUtil.calcQuadraticEquation({
            a: MathUtil.ctg(MathUtil.toRadians(angle)),
            b: bottomWidth,
            c: -liquidArea,
        });
    }


}