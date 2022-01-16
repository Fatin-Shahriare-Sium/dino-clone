//<img src="./imgs/cactus.png" alt="" class="deno-cactus-img">

let dinoGround = document.querySelector('.deno-ground')

let FRAME_TIME = 100

export function updateCactus(delta) {
    ;[...dinoGround.children].forEach(sig => {
        if (sig.className == 'deno-cactus-img') {
            let preCactusLeftProperty = parseInt(getComputedStyle(sig).getPropertyValue('--left'))
            console.log('precactus', preCactusLeftProperty);
            sig.style.setProperty('--left', preCactusLeftProperty + (delta * .05 * -1))
            if (preCactusLeftProperty <= -0) {
                sig.remove()
                let newCactus = document.createElement('img')
                newCactus.src = './imgs/cactus.png'
                newCactus.className = 'deno-cactus-img'
                newCactus.style.setProperty('--left', 100)
                dinoGround.appendChild(newCactus)
            }
        }
    })
}