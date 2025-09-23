document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide')
    const slidesContainer = document.querySelector('.slides')
    const totalSlide = slides.length
    let currenIndex = 1;
    let slideWidth = 100;
    // clone
    const firstClone = slides[0].cloneNode(true)
    const lastClone = slides[totalSlide - 1].cloneNode(true)

    firstClone.id = "first-clone"
    lastClone.id = "last-clone"

    slidesContainer.appendChild(firstClone)
    slidesContainer.insertBefore(lastClone, slidesContainer.firstChild)

    const allSlide = document.querySelectorAll('.slide')
    slidesContainer.style.transform = `translateX(-${slideWidth * currenIndex}%)`

    function show(index) {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    function moveSlide(index) {
        slidesContainer.style.transition = "transform: 0.8s ease-in-out"
        slidesContainer.style.transform = `translateX(-${slideWidth * index}%)`
    }

    function nextSlide() {
        currenIndex++;
        moveSlide(currenIndex)
    }

    slidesContainer.addEventListener('transitionend', () => {
        currentSlide = allSlide[currenIndex]
        if (currentSlide.id === firstClone.id) {
            slidesContainer.style.transition = `none`
            setTimeout(() => {
                slidesContainer.style.transition = "transform 0.8s ease-in-out";
            });
            currenIndex = 1
            slidesContainer.style.transform = `translateX(-${slideWidth * currenIndex}%)`
        }
        if (currentSlide.id === lastClone.id) {
            slidesContainer.style.transition = `none`
            setTimeout(() => {
                slidesContainer.style.transition = "transform 0.8s ease-in-out";
            });
            currenIndex = totalSlide
            slidesContainer.style.transform = `translateX(-${slideWidth * currenIndex}%)`
        }
    })

    setInterval(nextSlide, 3000)
})