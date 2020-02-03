//question 1.
// a) make sure the form is completely filled 
// b) have to form return an error if any field is left off.

let boxes = document.querySelectorAll('input')
let form = document.querySelector("#parking-form")
let errorMessages = document.querySelectorAll("label")


form.addEventListener("submit", function (event) {
  event.preventDefault()
  for (let box of boxes) {
    if (box.value === '') {
      if (box.parentElement.classList.contains("input-invalid")) { //This loop checks if the form field is filled in.  If it is, then the field does not get a "is required" message

      } else {
        box.parentElement.classList.add("input-invalid")
        box.insertAdjacentHTML("afterend", "is required")
        console.log("is required")
      }

    } else {
      box.parentElement.classList.add("input-valid")
    }

  }
})
