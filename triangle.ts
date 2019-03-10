import { Vector } from "./vector";

export class Triangle {
    public readonly a!: Vector;
    public readonly b!: Vector;
    public readonly c!: Vector;

    public readonly n!: Vector;
    public readonly m!: Vector;

    public readonly h0!: number;
    public readonly h1!: number;
    public readonly h2!: number;

    public readonly h3!: number;
    public readonly h4!: number;
    public readonly h5!: number;

    /**
     * Creates a triangle with the given vectors a, b and c.
     */
    constructor(a: Vector, b: Vector, c: Vector) {
        this.a = a;
        this.b = b;
        this.c = c;

        // n is c-a
        const n = this.n = Vector.substract(b, a);

        // m is b-a
        const m = this.m = Vector.substract(c, a);

        const f = n.y * m.x - m.y * n.x;

        // helper for s
        this.h0 = (m.y * a.x - m.x * a.y) / f
        this.h1 = m.x / f;
        this.h2 = -m.y / f;

        // helper for t
        this.h3 = 1 / m.x;
        this.h4 = -a.x / m.x;
        this.h5 = -n.x / m.x;

        Object.freeze(this);
    }

    /**
     * Calculates the multiplicators s and t, which can be used to reconstruct the vector v in the triangle space.
     */
    private calcST(v: Vector): { s: number, t: number } {
        const s = v.y * this.h1 + v.x * this.h2 + this.h0;
        const t = v.x * this.h3 + this.h4 + s * this.h5;

        return { s: s, t: t };
    }

    /**
     * Checks wether the given v cen be correctly recunstructed with calcST.
     */
    check(v: Vector, errorMargin = 1e-5) {
        const st = this.calcST(v);

        const re = Vector.add(
            this.a,
            Vector.add(
                Vector.multiply(st.s, this.n),
                Vector.multiply(st.t, this.m)
            )
        );

        return Vector.substract(v, re).length <= errorMargin;
    }

    /**
     * Checks wether the given vector is in this triangle.
     */
    isIn(v: Vector) {
        const st = this.calcST(v);
        return st.s < 1 && st.t < 1 && (st.s + st.t) < 1;
    }

    toString() {
        return `Triangle{ a: ${this.a.toString()}, b: ${this.b.toString()}, c: ${this.c.toString()} }`;
    }
}