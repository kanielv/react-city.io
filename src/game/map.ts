import { Tile } from "./tile"

export class Map {
    
    constructor() {

    }
}

const tileWidth = 85
const tileHeight = 85

const gridRows = 9
const gridCols = 13

const drawMap = (context: CanvasRenderingContext2D) => {
    for(let row = 0; row < gridRows; row++) {
        for(let col = 0; col < gridCols; col++) {
            let idx = row * gridRows + col
            
            let tile = new Tile((tileWidth * col) + 200, tileHeight * row, tileWidth, tileHeight)
            tile.draw(context)
        }
    }
}

export { drawMap }