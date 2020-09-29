"use strict";

let userForm = document.querySelector('.user-form')

let result = document.querySelector('.result')


userForm.addEventListener('submit', (event) => {
  event.preventDefault()

  let userInput = document.querySelector('.user-input').value

  result.innerHTML = userInput

  if (userInput.length > 3) {
    result.innerHTML = userInput
    result.classList.add('result-class-success')
  }

  let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (format.test(userInput)) {
    result.innerHTML = userInput
    result.classList.add('result-class-fail')
  }

  userForm.reset()
})