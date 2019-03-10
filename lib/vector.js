"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vector {
    /**
     * Creates a vector with the given x and y.
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        Object.freeze(this);
    }
    /**
     * Calculates the length of the vector.
     */
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * Substracts the second from the first vector.
     */
    static substract(v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }
    /**
     * Adds the second to the first vector.
     */
    static add(v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }
    /**
     * Multiplies the vector with the number n.
     */
    static multiply(n, { x, y }) {
        return new Vector(n * x, n * y);
    }
    toString() {
        return `Vector{ x: ${this.x}, y: ${this.y} }`;
    }
}
exports.Vector = Vector;
