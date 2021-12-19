
let denoGroundElme = document.querySelector('.deno-ground')
let g1 = document.getElementById('g-1')
let g2 = document.getElementById('g-2')

export function updateDenoGround(delta) {
    ;[...denoGroundElme.children].forEach(sig => {
        if (sig.className == 'deno-ground-img') {

            sig.style.left = `-${delta * .05}%`
            if (parseInt(g1.style.left) <= -300) {
                //sig.style.display = 'none'
                g1.style.left = '600%'
                //console.log(sig.style.left, getComputedStyle(sig).getPropertyValue('left'));
                //console.log(getComputedStyle(g1).getPropertyValue('left'), getComputedStyle(g2).getPropertyValue('left'));
            }

        }
    })


}