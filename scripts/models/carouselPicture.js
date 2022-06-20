//affichage des images de la lightbox
class CarouselPicture {
  constructor(data) {
    this.photographerId = data.photographerId
    this.title = data.title
    this.image = data.image
    this.id = data.id
    this.likes = data.likes
    this.date = data.date
  }

  getUserCardDOM() {
    const slide = document.createElement('div')
    slide.classList.add('slide')
    const button_left = document.createElement('div')
    button_left.classList.add('controls')
    button_left.classList.add('controls-left')
    const prev_img = document.createElement('button')
    prev_img.classList.add('img')
    prev_img.classList.add('prev-image')
    prev_img.setAttribute('aria-label', 'média précédent')
    prev_img.setAttribute('tabindex', 0)
    const arrow_left = document.createElement('i')
    arrow_left.classList.add('fa-solid', 'fa-angle-left')
    arrow_left.setAttribute('aria-hidden', false)
    const button_right = document.createElement('div')
    button_right.classList.add('controls')
    button_right.classList.add('controls-right')
    const next_img = document.createElement('button')
    next_img.classList.add('img')
    next_img.classList.add('next-image')
    next_img.setAttribute('aria-label', 'média suivant')
    next_img.setAttribute('tabindex', 0)
    const arrow_right = document.createElement('i')
    arrow_right.classList.add('fa-solid', 'fa-angle-right')
    arrow_right.setAttribute('aria-hidden', false)
    const source_content = document.createElement('div')
    source_content.classList.add('source-content')
    const source = document.createElement('img')
    source.setAttribute(
      'src',
      `${`assets/samplePhotos/${this.photographerId}/${this.image}`}`
    )
    source.setAttribute('alt', this.title)
    source.setAttribute('tabindex', 0)
    source.setAttribute('aria-label', this.title)
    const title = document.createElement('div')
    title.classList.add('title-lightbox')
    title.innerHTML = this.id
    slide.appendChild(button_left)
    slide.appendChild(source_content)
    slide.appendChild(button_right)
    source_content.appendChild(source)
    source_content.appendChild(title)
    button_left.appendChild(prev_img)
    button_right.appendChild(next_img)
    prev_img.appendChild(arrow_left)
    next_img.appendChild(arrow_right)

    //fonction de gestion défilement d'images au click
    const carouselItem = document.getElementsByClassName('carousel-item')

    prev_img.addEventListener('click', () => {
      goToPreviousSlide(carouselItem)
    })
    next_img.addEventListener('click', () => {
      goToNextSlide(carouselItem)
    })
    return slide
  }
}
