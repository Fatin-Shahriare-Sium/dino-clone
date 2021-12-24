
let denoGroundElme = document.querySelector('.deno-ground')
let g1 = document.getElementById('g-1')
let g2 = document.getElementById('g-2')
console.log(g2.style);

export function updateDenoGround(delta) {
    console.log(getComputedStyle(g1).getPropertyValue('--left'), getComputedStyle(g2).getPropertyValue('--left'));
    ;[...denoGroundElme.children].forEach(sig => {
        if (sig.className == 'deno-ground-img') {

            let sigElementLeftProperty = parseInt(getComputedStyle(sig).getPropertyValue('--left'))

            sig.style.setProperty('--left', sigElementLeftProperty + (delta * .1 * -1))

            // console.log('sigelement left', sigElementLeftProperty - 30);
            if (sigElementLeftProperty <= -300) {

                sig.style.setProperty('--left', 300)
                //sig.style.display = 'none'
            }

        }
    })


}