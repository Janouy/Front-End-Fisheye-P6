//modification des attributs des médias pour permettre leur défilement dans la lightbox
const setNodeAttributes = (lastItem, currentItem) => {
  lastItem.style.display = 'none'
  currentItem.style.display = 'flex'
  lastItem.setAttribute('aria-hidden', 'true')
  currentItem.setAttribute('aria-hidden', 'false')
}
//fonction affichage prochain média de la lightbox
const goToNextSlide = (carouselItem) => {
  currentItemPosition += 1
  if (currentItemPosition >= 1 && currentItemPosition < carouselItem.length) {
    const lastItem = document.querySelector(`.item-${currentItemPosition - 1}`)
    const currentItem = document.querySelector(`.item-${currentItemPosition}`)
    setNodeAttributes(lastItem, currentItem)
  } else if (currentItemPosition >= carouselItem.length) {
    currentItemPosition = 0
    const lastItem = document.querySelector(`.item-${carouselItem.length - 1}`)
    const currentItem = document.querySelector(`.item-${currentItemPosition}`)
    setNodeAttributes(lastItem, currentItem)
  }
}
//fonction affichage précédent média de la lightbox
const goToPreviousSlide = (carouselItem) => {
  if (currentItemPosition > 0) {
    currentItemPosition -= 1
    if (currentItemPosition >= 1 && currentItemPosition < carouselItem.length) {
      const lastItem = document.querySelector(
        `.item-${currentItemPosition + 1}`
      )
      const currentItem = document.querySelector(`.item-${currentItemPosition}`)
      setNodeAttributes(lastItem, currentItem)
    } else if (currentItemPosition === 0) {
      const lastItem = document.querySelector(
        `.item-${currentItemPosition + 1}`
      )
      const currentItem = document.querySelector(`.item-${currentItemPosition}`)
      setNodeAttributes(lastItem, currentItem)
    }
  } else if (currentItemPosition === 0) {
    currentItemPosition = carouselItem.length - 1
    if (currentItemPosition >= 1 && currentItemPosition < carouselItem.length) {
      const currentItem = document.querySelector(`.item-${currentItemPosition}`)
      const lastItem = document.querySelector('.item-0')
      setNodeAttributes(lastItem, currentItem)
    } else if (currentItemPosition === 0) {
      const lastItem = document.querySelector(
        `.item-${currentItemPosition + 1}`
      )
      const currentItem = document.querySelector(`.item-${currentItemPosition}`)
      setNodeAttributes(lastItem, currentItem)
    }
  }
}

// navigation lightbox avec les flèches du clavier
const carouselItem = document.getElementsByClassName('carousel-item')
const carouselModal = document.getElementById('lightbox-modal')
document.addEventListener('keydown', (e) => {
  const keycode = e.code
  if (keycode === 'ArrowRight') {
    goToNextSlide(carouselItem)
  }
  if (keycode === 'ArrowLeft') {
    goToPreviousSlide(carouselItem)
  }
})
