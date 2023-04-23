import Canvas from "@/components/Canvas"
import { useEffect, useState } from "react"
import Hud from "@/components/Hud"
import { GameEngine } from "@/game/game"
import { Map } from "@/game/map"

interface Game {
    drawMap(context: CanvasRenderingContext2D): void
}

export default function Game() {
    const [width, setWidth] = useState(0)
    const [height, setheight] = useState(0)
    const [game, setGame] = useState(new GameEngine())

    useEffect(() => {
        setWidth(window.innerWidth)
        setheight(window.innerHeight)

    })

    const draw = (context: CanvasRenderingContext2D) => {
        let map = new Map(9, 13)
        map.drawMap(context)
    }
    return (
    <>
    <div className="overflow-hidden">
        <Hud />
        <Canvas draw={draw} width={width} height={height - 100} />
    </div>
   

    </>
    )
}