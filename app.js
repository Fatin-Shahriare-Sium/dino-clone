import { updateCactus } from "./cactus.js";
import { updateDino } from "./dino.js";
import { updateDenoGround } from "./ground.js";
let dinoElm = document.querySelector('.deno-img')
let cactusElm = document.querySelector('.deno-cactus-img')
let gameMSg = document.getElementById('msg')
let dinoGround = document.querySelector('.deno-ground')
let score = document.getElementById('score')
let frameID;

console.log('I have been able to build this by the grace of Allah')

let lastime;

function updateLoop(time) {

    if (!lastime) {
        lastime = time
        frameID = window.requestAnimationFrame(updateLoop)
        return
    }
    let delta = time - lastime
    updateDenoGround(delta)
    updateDino(delta)
    updateCactus(delta)
    checkCollision(dinoElm, cactusElm)
    //updateScore(delta)
    score.innerText = parseInt(time / 100)
    //console.log(time, delta);
    lastime = time

}


window.addEventListener('touchstart', () => {
    frameID = window.requestAnimationFrame(updateLoop)

})

window.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.code == 'Space') {
        frameID = window.requestAnimationFrame(updateLoop)

    }
})


function checkCollision(elm1, elm2) {
    var elm1Rect = elm1.getBoundingClientRect();
    var elm2Rect = elm2.getBoundingClientRect();
    ;[...dinoGround.children].forEach((sig) => {
        if (sig.className == 'deno-cactus-img') {

            if (elm1Rect.right >= sig.getBoundingClientRect().left && elm1Rect.left <= sig.getBoundingClientRect().right &&
                elm1Rect.bottom >= sig.getBoundingClientRect().top &&
                elm1Rect.top <= sig.getBoundingClientRect().bottom) {
                gameMSg.innerText = 'Collapse'
                return window.cancelAnimationFrame(frameID)


            } else {
                frameID = window.requestAnimationFrame(updateLoop)
                //window.location.reload()

            }
        }
    })
}