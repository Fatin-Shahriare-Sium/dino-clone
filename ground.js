
let denoGroundElme = document.querySelector('.deno-ground')
let g1 = document.getElementById('g-1')
let g2 = document.getElementById('g-2')
console.log(g2.style);

export function updateDenoGround(delta) {
    console.log(getComputedStyle(g1).getPropertyValue('left'), getComputedStyle(g2).getPropertyValue('left'));
    ;[...denoGroundElme.children].forEach(sig => {
        if (sig.className == 'deno-ground-img') {
            let previousLeft = sig.style.left ? parseInt(sig.style.left) : 0
            //let x = `${sig.style.left ? sig.style.left : 0 + delta * .05}%`

            //sig.style.left = `${previousLeft - (delta * .05 * .01)}%`
            console.log(previousLeft);
            if (parseInt(sig.style.left) <= -300) {
                //sig.style.display = 'none'
                sig.style.left = '300%'

                //console.log(sig.style.left, getComputedStyle(sig).getPropertyValue('left'));
            }

        }
    })


}