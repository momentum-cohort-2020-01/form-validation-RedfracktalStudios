let boxes = document.querySelectorAll('input')

let form = document.querySelector("#parking-form")
let errorMessages = document.querySelectorAll("label")
form.addEventListener("submit", function (event) {
  event.preventDefault()
  for (let box of boxes) {
    if (box.value === '') {
      box.parentElement.classList.add("input-invalid")
      box.insertAdjacentHTML("afterend", "is required")
      console.log("is required")

    }
    else {
      box.parentElement.classList.add("input-valid")
    }
  }
})
