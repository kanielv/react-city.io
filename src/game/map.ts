
const tileWidth = 120
const tileHeight = 120

const gridRows = 8
const gridCols = 15

const drawMap = (context: CanvasRenderingContext2D) => {
    for(let row = 0; row < gridRows; row++) {
        for(let col = 0; col < gridCols; col++) {
            let idx = row * gridRows + col
            
            context.rect(tileWidth * col, tileHeight * row, tileWidth, tileHeight)
            context.stroke()
        }
    }
}

export { drawMap }