document.addEventListener('DOMContentLoaded', function () {
    const amounts = document.querySelectorAll(".amount")
    amounts.forEach(amount => {
        const input = amount.querySelector("input")
        const btnAdd = amount.querySelector(".btn-add")
        const btnSubtract = amount.querySelector(".btn-subtract")

        btnAdd.addEventListener('click', () => {
            input.value = parseInt(input.value) + 1
        })

        btnSubtract.addEventListener('click', () => {
            if (parseInt(input.value) > parseInt(input.min)) {
                input.value = parseInt(input.value) - 1
            }
        })
    });
})