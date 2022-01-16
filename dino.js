let dinoElm = document.querySelector('.deno-img')

let CURRENT_FRAME = 0
let TOTAL_FRAME = 2
let FRAME_TIME = 100
let CURRENT_TIME = 0

export function updateDino(delta) {

    if (CURRENT_TIME >= FRAME_TIME) {
        CURRENT_FRAME = (CURRENT_FRAME + 1) % TOTAL_FRAME
        console.log('curentfrme', CURRENT_FRAME);
        dinoElm.src = `./imgs/dino-run-${CURRENT_FRAME}.png`
        return CURRENT_TIME = 0
    }
    CURRENT_TIME += delta
}


window.addEventListener('touchstart', handleJump)
window.addEventListener('keydown', (event) => {
    if (event.code == 'Space') {
        handleJump()
    }
})
function handleJump(e) {
    if (TOTAL_FRAME) {
        dinoElm.style.marginTop = '-15%'
        setTimeout(() => {
            dinoElm.style.transition = 'all.3s ease'
            dinoElm.style.marginTop = ''
        }, 300)
    }
    console.log(e);
}