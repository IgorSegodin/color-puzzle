export default {

    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    randomArbitrary: function (min, max) {
        return Math.random() * (max - min) + min;
    },

    /**
     * Returns a random integer between min (inclusive) and max (inclusive).
     * The value is no lower than min (or the next integer greater than min
     * if min isn't an integer) and no greater than max (or the next integer
     * lower than max if max isn't an integer).
     * Using Math.round() will give you a non-uniform distribution!
     */
    randomIntRange: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

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