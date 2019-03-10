import { Vector } from "./vector";
export declare class Triangle {
    readonly a: Vector;
    readonly b: Vector;
    readonly c: Vector;
    readonly n: Vector;
    readonly m: Vector;
    readonly h0: number;
    readonly h1: number;
    readonly h2: number;
    readonly h3: number;
    readonly h4: number;
    readonly h5: number;
    /**
     * Creates a triangle with the given vectors a, b and c.
     */
    constructor(a: Vector, b: Vector, c: Vector);
    /**
     * Calculates the multiplicators s and t, which can be used to reconstruct the vector v in the triangle space.
     */
    private calcST;
    /**
     * Checks wether the given v cen be correctly recunstructed with calcST.
     */
    check(v: Vector, errorMargin?: number): boolean;
    /**
     * Checks wether the given vector is in this triangle.
     */
    isIn(v: Vector): boolean;
    toString(): string;
}
