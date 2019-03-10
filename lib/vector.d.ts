export declare class Vector {
    x: number;
    y: number;
    /**
     * Creates a vector with the given x and y.
     */
    constructor(x: number, y: number);
    /**
     * Calculates the length of the vector.
     */
    readonly length: number;
    /**
     * Substracts the second from the first vector.
     */
    static substract(v1: Vector, v2: Vector): Vector;
    /**
     * Adds the second to the first vector.
     */
    static add(v1: Vector, v2: Vector): Vector;
    /**
     * Multiplies the vector with the number n.
     */
    static multiply(n: number, { x, y }: Vector): Vector;
    toString(): string;
}
