const form = document.querySelector('#rating_form')
const containers = document.querySelectorAll('.rating__container')
const rate = document.querySelector('#rate')

let givenRating = null

form.addEventListener('submit', e => {
  e.preventDefault()
  rate.innerText = `You selected ${getRating()} out of 5`
  rotateCards()
})

function getRating() {
  return form.querySelector('input[name="radio"]:checked').value
}

function rotateCards() {
  containers[0].classList.add('closed')
  containers[1].classList.remove('closed')
}
