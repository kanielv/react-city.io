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
            
            context.fillStyle = "#90ee90"
            context.fillRect((tileWidth * col) + 200, tileHeight * row, tileWidth, tileHeight)

            context.strokeStyle = "#f5f5f5"
            context.strokeRect((tileWidth * col) + 200, tileHeight * row, tileWidth, tileHeight)

        }
    }
}

export { drawMap }