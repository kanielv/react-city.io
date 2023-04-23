import { isContext } from "vm"
import { Map } from "./map"

export class GameEngine {
    previoustime: Number
    

    constructor() {
        this.previoustime = Date.now()
        this.run()
    }

    run = () => {
        let newtime = Date.now()
        this.previoustime = newtime;

        requestAnimationFrame(this.run);

    }
}