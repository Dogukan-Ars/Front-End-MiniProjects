const display = document.querySelector("#display")
const btnEl = document.querySelectorAll("button")

btnEl.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id == "clear") {
            display.innerText = ""
        } else if (btn.id == "backspace") {
            let string = display.innerText.toString()
            display.innerText = string.substr(0, string.length - 1)
        } else if (display.innerText != "" && btn.id == "equals") {
            display.innerText = eval(display.innerText)
        } else if (display.innerText == "" && btn.id == "equals") {
            display.innerText = "Empty!"
            setTimeout(() => (display.innerText = ""), 2000)
        } else {
            display.innerText += btn.id
        }
    })
})

const themeToggle = document.querySelector(".theme-toggler")
const calculator = document.querySelector(".calculator")
const toggleIcon = document.querySelector(".toggler-icon")
let isDark = true
themeToggle.addEventListener("click", () => {
    calculator.classList.toggle("dark")
    themeToggle.classList.toggle("active")
    isDark = !isDark
})