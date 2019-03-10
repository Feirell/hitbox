export class Vector {
    /**
     * Creates a vector with the given x and y.
     */
    constructor(public x: number, public y: number) {
        Object.freeze(this);
    }

    /**
     * Calculates the length of the vector.
     */
    get length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * Substracts the second from the first vector.
     */
    static substract(v1: Vector, v2: Vector): Vector {
        return new Vector(
            v1.x - v2.x,
            v1.y - v2.y
        );
    }

    /**
     * Adds the second to the first vector.
     */
    static add(v1: Vector, v2: Vector): Vector {
        return new Vector(
            v1.x + v2.x,
            v1.y + v2.y
        );
    }

    /**
     * Multiplies the vector with the number n.
     */
    static multiply(n: number, { x, y }: Vector): Vector {
        return new Vector(n * x, n * y);
    }

    toString() {
        return `Vector{ x: ${this.x}, y: ${this.y} }`;
    }
}