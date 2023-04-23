import { Tile } from "./tile"

export class Map {
    tileWidth: number;
    tileHeight: number;
    rows: number;
    cols: number;

    constructor(rows?: number, cols?: number) {
        this.tileWidth = 85;
        this.tileHeight = 85;
        this.rows = rows ?? 0;
        this. cols = cols ?? 0;
    }

    drawMap = (context: CanvasRenderingContext2D) => {
        for(let row = 0; row < this.rows; row++) {
            for(let col = 0; col < this.cols; col++) {
                let idx = row * this.rows + col
                
                let tile = new Tile(
                                (this.tileWidth * col) + 200, this.tileHeight * row, 
                                 this.tileWidth, this.tileHeight
                            )
                tile.draw(context)
            }
        }
    }
}



