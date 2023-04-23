import Canvas from "@/components/Canvas"
import { useEffect, useState } from "react"
import { drawMap } from "@/game/map"
import Hud from "@/components/Hud"

export default function Game() {
    const [width, setWidth] = useState(0)
    const [height, setheight] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
        setheight(window.innerHeight)
    })

    const draw = (context: CanvasRenderingContext2D) => {
        drawMap(context)
    }
    return (
    <>
    <div className="relative">
        <Canvas draw={draw} width={width} height={height} />
        <div className="absolute inset-x-0 bottom-0 left-96 h-24 w-1/2 border-2 bg-red-900">
            <Hud />
        </div>
    </div>
   

    </>
    )
}