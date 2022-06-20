const setNodeAttributes = (lastItem, currentItem) => {
  $(lastItem).css('display', 'none')
  $(currentItem).css('display', 'flex')
  $(lastItem).attr('aria-hidden', 'true')
  $(currentItem).attr('aria-hidden', 'false')
}

const goToNextSlide = (carouselItem) => {
  currentItemPosition += 1
  if (currentItemPosition >= 1 && currentItemPosition < carouselItem.length) {
    const currentItem = `.item-${currentItemPosition}`
    const lastItem = `.item-${currentItemPosition - 1}`
    setNodeAttributes(lastItem, currentItem)
  } else if (currentItemPosition >= carouselItem.length) {
    currentItemPosition = 0
    const lastItem = `.item-${carouselItem.length - 1}`
    const currentItem = `.item-${currentItemPosition}`
    setNodeAttributes(lastItem, currentItem)
  }
}

const goToPreviousSlide = (carouselItem) => {
  if (currentItemPosition > 0) {
    currentItemPosition -= 1
    if (currentItemPosition >= 1 && currentItemPosition < carouselItem.length) {
      const currentItem = `.item-${currentItemPosition}`
      const lastItem = `.item-${currentItemPosition + 1}`
      setNodeAttributes(lastItem, currentItem)
    } else if (currentItemPosition === 0) {
      const lastItem = `.item-${currentItemPosition + 1}`
      const currentItem = `.item-${currentItemPosition}`
      setNodeAttributes(lastItem, currentItem)
    }
  } else if (currentItemPosition === 0) {
    currentItemPosition = carouselItem.length - 1
    if (currentItemPosition >= 1 && currentItemPosition < carouselItem.length) {
      const currentItem = `.item-${currentItemPosition}`
      const lastItem = '.item-0'
      setNodeAttributes(lastItem, currentItem)
    } else if (currentItemPosition === 0) {
      const lastItem = `.item-${currentItemPosition + 1}`
      const currentItem = `.item-${currentItemPosition}`
      setNodeAttributes(lastItem, currentItem)
    }
  }
}

// navigation carousel avec les flèches du clavier
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
