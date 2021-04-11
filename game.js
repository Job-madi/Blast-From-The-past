const prev = document.querySelector('.previous');
const next = document.querySelector('.next');
const items = document.querySelectorAll('.item');

const side1 = document.getElementById('side1');
const middle = document.getElementById('middle')
const side2 = document.getElementById('side2');

const middleBtn = document.querySelector('.middle-btn')
const side1Btn = document.querySelector('.side1-btn')
const side2Btn = document.querySelector('.side2-btn')

const conversions = [
    'dance-revolution',
    'snake',
    'tetris',
    'pacman'
]

const images = [
    './Images/dance-revolution.jpg',
    './Images/snake.jpg',
    './Images/tetris.jpg',
    './Images/pacman.jpg'
]

m = 1;
s1 = 0;
s2 = 2;

function nextSlide(e) {
    const middleImg = middle.children[0]
    middleImg.src = images[(m + 1)%4]
    m += 1
    
    const side1Img = side1.children[0]
    side1Img.src = images[(s1+1)%4]
    s1 += 1

    const side2Img = side2.children[0]
    side2Img.src = images[(s2+1)%4]
    s2 += 1

}

function prevSlide(e) {
    if(m <= 0){
        m = 4
    }
    if(s1 <= 0){
        s1 = 4
    }
    if(s2 <= 0){
        s2 = 4
    }
    const middleImg = middle.children[0]
    middleImg.src = images[(m - 1)%4]
    m -= 1
    
    const side1Img = side1.children[0]
    side1Img.src = images[(s1-1)%4]
    s1 -= 1

    const side2Img = side2.children[0]
    side2Img.src = images[(s2-1)%4]
    s2 -= 1

}

next.addEventListener('click', (e)=> {
    nextSlide(e);
})

prev.addEventListener('click', (e)=> {
    prevSlide(e);
})

middleBtn.addEventListener('click', e => {
   const parent = e.target.parentElement.children[0];
    const loc = parent.src
   conversions.forEach(element => {
    const e = element.charAt(0).toUpperCase() + element.slice(1)
       if(loc.includes(element)){
           window.location.href = `Games/${e}/${element}.html`
       }
   })

   
})

side1Btn.addEventListener('click', e => {
    const parent = e.target.parentElement.children[0];
     const loc = parent.src
    conversions.forEach(element => {
        const e = element.charAt(0).toUpperCase() + element.slice(1)
        if(loc.includes(element)){
            window.location.replace(`Games/${e}/${element}.html`)
        }
    })
 
    
 })

 side2Btn.addEventListener('click', e => {
    const parent = e.target.parentElement.children[0];
     const loc = parent.src
    conversions.forEach(element => {
        const e = element.charAt(0).toUpperCase() + element.slice(1)
        if(loc.includes(element)){
            window.location.href = `Games/${e}/${element}.html`
        }
    })
 
    
 })
