import Canvas from "@/components/Canvas"
import { useEffect, useState } from "react"
import { drawMap } from "@/game/map"
import Hud from "@/components/Hud"
import { GameEngine } from "@/game/game"

export default function Game() {
    const [width, setWidth] = useState(0)
    const [height, setheight] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
        setheight(window.innerHeight)

        new GameEngine()
    })

    const draw = (context: CanvasRenderingContext2D) => {
        drawMap(context)
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