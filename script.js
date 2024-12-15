let sliderImages= [

       './images/image1',
       './images/image2',     
    ];
    


function loadImages() {
    const sliderContainer = document.querySelector('.slider-container')
    
    sliderImages.forEach((imagePath, index) => {
        const slide = document.createElement('div')
        slide.className = 'slide'
        
        const img = document.createElement('img')
        img.src = imagePath
        img.alt = `Flyer Design ${index + 1}`
        
        slide.appendChild(img)
        sliderContainer.appendChild(slide)
    })
}

function initSlider() {
    const slides = document.querySelectorAll('.slide')
    let currentSlide = 0
    
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${index * 100}%)`
    })
}

document.addEventListener('DOMContentLoaded', () => {
    loadImages()
    initSlider()
})

document.addEventListener('DOMContentLoaded', () => {
    loadImages()
    initSlider()
})
