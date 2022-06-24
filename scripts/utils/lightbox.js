const lightbox = document.getElementById('lightbox-modal')
let currentItemPosition = 0
const lightboxMedias = document.getElementById('lightbox-modal')
//ouverture de la lightbox
function displayLightbox(media_id) {
  const hearts = document.querySelectorAll('.like')
  const imageSection = document.querySelectorAll('.image-section')
  const videoSection = document.querySelectorAll('.video-section')
  imageSection.forEach((img) => img.setAttribute('tabindex', -1))
  videoSection.forEach((img) => img.setAttribute('tabindex', -1))
  imageSection.forEach((img) => img.setAttribute('aria-hidden', true))
  videoSection.forEach((img) => img.setAttribute('aria-hidden', true))
  const contactButton = document.querySelector('.contact-button')
  lightboxMedias.setAttribute('tabindex', 0)
  lightbox.setAttribute('aria-hidden', false)
  lightbox.classList.remove('hidden')
  wrapper.setAttribute('aria-hidden', true)
  wrapper.classList.add('opacity')
  body.classList.add('no-scroll')
  logo.setAttribute('tabindex', -1)
  logo.setAttribute('disabled', 'disabled')
  lightbox.classList.remove('hidden')
  const opened_media = document.getElementById(media_id)
  opened_media.setAttribute('aria-hidden', false)
  opened_media.style.display = 'flex'
  const imgs_li = [...document.querySelectorAll('.carousel li')]
  imgs_li.forEach((item, index) => {
    item.classList.add(`item-${index}`)
  })
  const imgs = [...document.querySelectorAll('.carousel li img')]
  imgs.forEach((item) => {
    if (item.naturalWidth > item.naturalHeight) {
      item.classList.add('landscape')
    } else if (item.naturalWidth < item.naturalHeight) {
      item.classList.add('portrait')
    }
  })
  const mediasLightbox = [...document.querySelectorAll('.carousel li')]
  mediasLightbox.forEach((item, idx) => {
    if (item.getAttribute('style') === 'display: flex;') {
      currentItemPosition = idx
    }
  })
  wrapper.setAttribute('aria-hidden', true)
  wrapperLinks.setAttribute('tabindex', -1)
  wrapper.setAttribute('tabindex', -1)
  contactButton.setAttribute('tabindex', -1)
  sortsLinks.setAttribute('tabindex', -1)
  contactButton.setAttribute('disabled', 'disabled')
  sortsLinks.setAttribute('disabled', 'disabled')
  sortsOpen.forEach((item) => item.setAttribute('tabindex', -1))
  hearts.forEach((item) => item.setAttribute('tabindex', -1))
  sortsOpen.forEach((item) => item.setAttribute('onclick', 'return false'))
  hearts.forEach((item) => item.setAttribute('onclick', 'return false'))
  wrapper.addEventListener('click', desabledEvents, true)
  wrapper.classList.add('pointerCancel')
}
//fermeture de la lightbox
function closeLightbox() {
  const imageSection = document.querySelectorAll('.image-section')
  const videoSection = document.querySelectorAll('.video-section')
  const hearts = document.querySelectorAll('.like')
  imageSection.forEach((img) => img.setAttribute('tabindex', 0))
  videoSection.forEach((img) => img.setAttribute('tabindex', 0))
  imageSection.forEach((img) => img.setAttribute('aria-hidden', false))
  videoSection.forEach((img) => img.setAttribute('aria-hidden', false))
  const contactButton = document.querySelector('.contact-button')
  body.classList.remove('no-scroll')
  wrapper.classList.remove('opacity')
  lightbox.classList.add('hidden')
  lightbox.setAttribute('aria-hidden', true)
  logo.setAttribute('tabindex', 0)
  logo.removeAttribute('disabled', 'disabled')
  const display_none_media = document.querySelectorAll('.carousel-item')
  display_none_media.forEach((elt) => elt.setAttribute('aria-hidden', true))
  display_none_media.forEach((elt) => (elt.style.display = 'none'))
  const imgs_li = [...document.querySelectorAll('.carousel li')]
  imgs_li.forEach((item, index) => {
    item.classList.remove(`item-${index}`)
  })
  wrapper.setAttribute('aria-hidden', false)
  lightboxMedias.setAttribute('tabindex', -1)
  wrapperLinks.removeAttribute('tabindex', -1)
  wrapper.removeAttribute('tabindex', -1)
  contactButton.removeAttribute('tabindex', -1)
  sortsLinks.removeAttribute('tabindex', -1)
  sortsOpen.forEach((item) => item.removeAttribute('tabindex', -1))
  hearts.forEach((item) => item.setAttribute('tabindex', 0))
  sortsOpen.forEach((item) => item.removeAttribute('onclick', 'return false'))
  hearts.forEach((item) => item.removeAttribute('onclick', 'return false'))
  contactButton.removeAttribute('disabled', 'disabled')
  sortsLinks.removeAttribute('disabled', 'disabled')
  wrapper.removeEventListener('click', desabledEvents, true)
  wrapper.classList.remove('pointerCancel')
  logoFocus()
}

//fermeture de la lightbox avec escape
document.addEventListener('keydown', (e) => {
  const keyCode = e.code
  const lightboxAttribut = lightbox.getAttribute('aria-hidden')
  if (keyCode === 'Escape' && lightboxAttribut === 'false') {
    closeLightbox()
  }
})

// focus sur la ligthbox à l'ouverture
function buttonFocus() {
  lightboxMedias.focus()
}
//ouverture de la lightbox au click sur touche entrée du clavier
function buttonEventHandler(event) {
  if (event.keyCode == 13) {
    displayLightbox(this.dataset.id)
    buttonFocus()
    event.preventDefault()
  }
}
// focus sur le logo principal de la page
function logoFocus() {
  logo.setAttribute('tabindex', 0)
  logo.focus()
}
