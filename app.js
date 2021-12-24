import { updateDenoGround } from "./ground.js";

console.log('Allah is Almighty')

let lastime;

function updateLoop(time) {

    if (!lastime) {
        lastime = time
        window.requestAnimationFrame(updateLoop)
        return
    }
    let delta = time - lastime
    updateDenoGround(delta)
    console.log(time, delta);
    lastime = time
    window.requestAnimationFrame(updateLoop)

}

window.requestAnimationFrame(updateLoop)