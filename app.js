import { updateCactus } from "./cactus.js";
import { updateDino } from "./dino.js";
import { updateDenoGround } from "./ground.js";
let dinoElm = document.querySelector('.deno-img')
let cactusElm = document.querySelector('.deno-cactus-img')
let gameMSg = document.getElementById('msg')
let dinoGround = document.querySelector('.deno-ground')
let score = document.getElementById('score')
let frameID;

console.log('Allah is Almighty')

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

function updateScore(delta) {
    let x = 0;
    x += delta * .1
    score.innerText = x
}

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

                setTimeout(() => {
                    gameMSg.innerText = '😃'
                }, 300)

            } else {
                frameID = window.requestAnimationFrame(updateLoop)
                //window.location.reload()

            }
        }
        // if (elm1Rect.right >= elm2Rect.left && elm1Rect.left <= elm2Rect.right &&
        //     elm1Rect.bottom >= elm2Rect.top &&
        //     elm1Rect.top <= elm2Rect.bottom) {
        //     gameMSg.innerText = 'Collapse'
        //     setTimeout(() => {
        //         gameMSg.innerText = '😃'
        //     }, 300)
        // window.alert('Allah is Almighty')
        //}
    })
}