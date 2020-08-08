


(function (){
  document.addEventListener('DOMContentLoaded', () => {

    const trigger = document.querySelector('.navbar__toggle')

    const collapseHandler = (event) => {
      event.preventDefault()
      const target = document.querySelector(trigger.getAttribute('data-target'))
      if (target) {
        target.classList.toggle('navbar__links--on')
        trigger.childNodes[0].classList.toggle('navbar__icon--active')
      }
    }

    trigger.addEventListener('click', collapseHandler, false)
  })
})(document, window)