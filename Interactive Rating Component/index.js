const container = document.querySelector(".container")
const thanksEl = document.querySelector(".thank-you")
const submitBtn = document.querySelector("#submit")
const rateAgain = document.querySelector("#rate-again")
const ratingEl = document.querySelector("#rating")
const rates = document.querySelectorAll(".btn")

submitBtn.addEventListener("click", () => {
    thanksEl.classList.remove("hidden")
    container.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    thanksEl.classList.add("hidden")
    container.style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        ratingEl.innerHTML = rate.innerHTML 
    })
})