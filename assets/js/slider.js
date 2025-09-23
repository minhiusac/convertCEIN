document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide')
    const slidesContainer = document.querySelector('.slides')
    const totalSlide = sildes.length
    let currenIndex = 1;
    let slideWith = 100;
    // clone
    const firstClone = slides[0].cloneNode(true)
    const lastClone = slides[totalSlide - 1].cloneNode(true)

    firstClone.id = "first-clone"
    lastClone.id = "last-clone"

    slidesContainer.appendChild(firstClone)
    slidesContainer.insertBefore(lastClone, slidesContainer.firstChild)

    const allSlide = document.querySelectorAll('.slide')
    slidesContainer.style.transform = `translateX(${slideWith * currenIndex}%)`

    function show(index) {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currenIndex++
        if (currenIndex >= sildes.length) {
            currenIndex = 0
        }
        show(currenIndex)
    }

    show(currenIndex)
    setInterval(nextSlide, 3000)
})