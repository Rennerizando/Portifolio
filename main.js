let time = 2500,
    
    sliders = document
                .querySelectorAll("#slider")
    
    
function  nextImage(slider, time) {
let images = slider.querySelectorAll("img")
    
let max = images.length;

let currentImageIndex = 0;
  
setInterval(() => {
    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
         }, time)
}

function start() {
   
        // troca de image
        nextImage(sliders[0], 2500)
        nextImage(sliders[1], 1500)
        nextImage(sliders[2], 3000)
        nextImage(sliders[3], 1500)
        nextImage(sliders[4], 2500)
        nextImage(sliders[5], 3000)
        nextImage(sliders[6], 2500)
        nextImage(sliders[7], 1500)
        nextImage(sliders[8], 3000)
        nextImage(sliders[9], 2500)
        nextImage(sliders[10], 1500)
        nextImage(sliders[11], 3000)
    
}

window.addEventListener("load", start)