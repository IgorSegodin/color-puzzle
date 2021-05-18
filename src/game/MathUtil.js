export default {
    toDegrees: function (rads) {
        return rads * (180 / Math.PI);
    },

    toRadians: function (angle) {
        return angle * (Math.PI / 180);
    },

    ctg: function (x) {
        return 1 / Math.tan(x);
    },

    /**
     * @typedef {Object} QuadraticEquationResult
     * @property {Number} x1
     * @property {Number} x2
     */

    /**
     * Example: a*x^2 + b*x + c = 0
     * @param a
     * @param b
     * @param c
     * @return {Number} only positive solution will be returned. If no positive answers, than exception is thrown.
     */
    calcQuadraticEquation({a, b, c}) {
        const d = Math.pow(b, 2) - 4 * a * c;

        if (d === 0) {
            const x1 = -b / (2 * a);

            if (x1 <= 0) {
                throw new Error(`No positive solutions: a=${a}, b=${b}, c=${c}, d=${d}, x1=${x1}`);
            }

            return x1;
        } else if (d > 0) {
            const x1 = (-b + Math.sqrt(d)) / (2 * a);
            const x2 = (-b - Math.sqrt(d)) / (2 * a);

            if (x1 <= 0 && x2 <= 0) {
                throw new Error(`No positive solutions: a=${a}, b=${b}, c=${c}, d=${d}, x1=${x1}, x2=${x2}`);
            } else if (x1 > 0 && x2 > 0) {
                throw new Error(`Ambiguous solutions: a=${a}, b=${b}, c=${c}, d=${d}, x1=${x1}, x2=${x2}`);
            }

            return x1 > x2 ? x1 : x2;
        } else {
            throw new Error(`No solution among real numbers: a=${a}, b=${b}, c=${c}, d=${d}`);
        }
    }
}