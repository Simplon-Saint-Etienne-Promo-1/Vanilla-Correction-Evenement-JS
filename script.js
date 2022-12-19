


let combinaison = []

window.addEventListener('keydown', function(e){
    if(e.repeat){
        return false 
    }else{
        if (e.code === 'KeyR' || e.code === 'KeyF' || e.code === 'KeyE' ) {
            if (!combinaison.includes(e.code)) {
                combinaison.push(e.code)
            }
        }
        if(combinaison.length === 2 ){
            this.document.querySelector('.hidden').style.opacity = 1
        }
        if(combinaison.length === 3 ){
            this.document.querySelector('.hidden').classList.add('red')
        }
    }
})

window.addEventListener('keyup', function(e){
    combinaison = combinaison.filter((element)=>{
        return !(element == e.code)
    })
    if(combinaison.length < 2 ){
        this.document.querySelector('.hidden').style.opacity = 0
    }
    if(combinaison.length < 3 ){
        this.document.querySelector('.hidden').classList.remove('red')
    }
})




function incrementCarousel(){
    let activeCarouselImg = document.querySelector('.carousel img.active')
    console.log(activeCarouselImg)
    activedId = parseInt(activeCarouselImg.id)
    console.log(activedId)
    if (activedId === carouselImg.length) {
        activedId = 0
    }
    console.log(activedId)
    carouselImg[activedId].classList.add('active')
    setTimeout(() => {
        activeCarouselImg.classList.remove('active')
    }, 1000);
}
const carouselImg = document.querySelectorAll('.carousel img')
// Carousel auto play 
setInterval(() => {
   incrementCarousel()
}, 5000);

// Carousel Button next

const nextBtn = document.querySelector('.next')

nextBtn.addEventListener('click', ()=>{
   incrementCarousel()
})

// Carousel Button previous

const previousBtn = document.querySelector('.previous')

previousBtn.addEventListener('click', ()=>{
    //Todo decrement carousel
})