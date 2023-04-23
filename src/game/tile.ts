export class Tile {
    posX: number;
    posY: number;
    width: number;
    height: number;

    constructor(x?:number, y?:number, w?:number, h?:number) {
        this.posX = x ?? 0;
        this.posY = y ?? 0;
        this.width = w ?? 0;
        this.height = h ?? 0;
    }

    set x(x: number) { this.posX = x }
    set y(y: number) { this.posX = y }
    set w(w: number) { this.width = w}
    set h(h: number) { this.height = h}

    get x() { return this.posX }
    get y() { return this.posY }
    get w() { return this.width }
    get h() { return this.height }

    draw = (context: CanvasRenderingContext2D) => {
        context.fillStyle = "#90ee90"
        context.fillRect(this.posX, this.posY, this.width, this.height)

        context.strokeStyle = "#f5f5f5"
        context.strokeRect(this.posX, this.posY, this.width, this.height)
    }
}