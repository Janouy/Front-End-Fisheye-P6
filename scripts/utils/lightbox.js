const lightbox = document.getElementById('lightbox-modal')
let currentItemPosition = 0
function displayLightbox(media_id) {
  const hearts = document.querySelectorAll('.like')
  const image_section = document.querySelectorAll('.image-section')
  const video_section = document.querySelectorAll('.video-section')
  image_section.forEach((img) => img.setAttribute('tabindex', -1))
  video_section.forEach((img) => img.setAttribute('tabindex', -1))
  image_section.forEach((img) => img.setAttribute('aria-hidden', true))
  video_section.forEach((img) => img.setAttribute('aria-hidden', true))
  const contactButton = document.querySelector('.contact-button')
  closeLightboxBtn.setAttribute('tabindex', 0)
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

function closeLightbox() {
  const hearts = document.querySelectorAll('.like')
  const image_section = document.querySelectorAll('.image-section')
  const video_section = document.querySelectorAll('.video-section')
  image_section.forEach((img) => img.setAttribute('tabindex', 0))
  video_section.forEach((img) => img.setAttribute('tabindex', 0))
  image_section.forEach((img) => img.setAttribute('aria-hidden', false))
  video_section.forEach((img) => img.setAttribute('aria-hidden', false))
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
  closeLightboxBtn.setAttribute('tabindex', -1)
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

document.addEventListener('keydown', (e) => {
  const keyCode = e.code
  const lightboxAttribut = lightbox.getAttribute('aria-hidden')
  if (keyCode === 'Escape' && lightboxAttribut === 'false') {
    closeLightbox()
  }
})

// focus btn fermeture ligthbox
const closeLightboxBtn = document.getElementById('lightbox-modal')
function buttonFocus() {
  closeLightboxBtn.focus()
}

function buttonEventHandler(event) {
  if (event.keyCode == 13) {
    displayLightbox(this.dataset.id)
    buttonFocus()
    event.preventDefault()
  }
}

function logoFocus() {
  logo.setAttribute('tabindex', 0)
  logo.focus()
}
