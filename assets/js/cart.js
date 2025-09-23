document.addEventListener('DOMContentLoaded', function () {
    const amout = document.querySelector(".amount")
    const input = amout.querySelector("input")
    const btnAdd = amout.querySelector(".btn-add")
    const btnSubtract = amout.querySelector(".btn-subtract")

    btnAdd.addEventListener('click', () => {
        input.value = parseInt(input.value) + 1
    })

    btnSubtract.addEventListener('click', () => {
        if (parseInt(input.value) > parseInt(input.min)) {
            input.value = parseInt(input.value) - 1
        }
    })
})