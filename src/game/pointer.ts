interface Point {
    x: number;
    y: number;
}

export class Pointer {
    static #x: number;
    static #y: number;

    static init() {
        this.#x = 0;
        this.#y = 0;
        window.addEventListener('mousemove', this.mousemove)
    }

    static set pos(p: Point) {
        this.#x = p.x;
        this.#y = p.y;
    }

    static get pos() {
        return {x: this.#x, y: this.#y}
    }

    // Mouse Functions
    static mousemove = (e: MouseEvent) => {
        this.pos = {x: e.pageX, y:e.pageY}
    }

} 