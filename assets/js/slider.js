document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide')
    const slidesContainer = document.querySelector('.slides')


    let currentIndex = 1;
    let slideWidth = 100;
    // khoá silde
    let isMove = false
    // clone
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    firstClone.id = "first-clone";
    lastClone.id = "last-clone";

    slidesContainer.appendChild(firstClone)
    slidesContainer.insertBefore(lastClone, slidesContainer.firstChild)

    const allSlide = document.querySelectorAll('.slide')
    const totalSlide = allSlide.length
    slidesContainer.style.width = `${allSlide.length * 100}%`;
    slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}%)`

    function show(index) {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    function moveSlide(index) {
        if (isMove) return
        isMove = true;
        slidesContainer.style.transition = "transform 0.8s ease-in-out"
        slidesContainer.style.transform = `translateX(-${slideWidth * index}%)`
    }



    function nextSlide() {
        if (isMove) return
        currentIndex++;
        moveSlide(currentIndex)
    }

    slidesContainer.addEventListener('transitionend', () => {
        currentSlide = allSlide[currentIndex]
        if (currentSlide.id === firstClone.id) {
            slidesContainer.style.transition = `none`
            currentIndex = 1
            slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}%)`
        }
        if (currentSlide.id === lastClone.id) {
            slidesContainer.style.transition = `none`
            currentIndex = totalSlide - 2
            slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}%)`
        }
        isMove = false
    })
    document.querySelector(".btn-next").addEventListener("click", () => {
        if (isMove) return
        currentIndex++
        moveSlide(currentIndex)
    });


    document.querySelector(".btn-prev").addEventListener("click", () => {
        if (isMove) return
        currentIndex--
        moveSlide(currentIndex)
    });
    setInterval(nextSlide, 3000)
})