//affichage des vidéos de la lightbox
class CarouselVideo {
  constructor(data) {
    this.photographerId = data.photographerId
    this.title = data.title
    this.video = data.video
    this.date = data.date
    this.id = data.id
    this.likes = data.likes
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
    const video = document.createElement('video')
    video.setAttribute('controls', true)
    video.setAttribute('playsinline', true)
    video.setAttribute('aria-label', this.title)
    const source = document.createElement('source')
    source.setAttribute(
      'src',
      `${`assets/samplePhotos/${this.photographerId}/${this.video}`}`
    )
    source.setAttribute('alt', this.title)
    source.setAttribute('type', 'video/mp4')
    source.setAttribute('autoplay', false)
    source.setAttribute('tabindex', 0)
    const title = document.createElement('div')
    title.classList.add('title-lightbox')
    title.innerHTML = this.title
    slide.appendChild(button_left)
    slide.appendChild(source_content)
    slide.appendChild(button_right)
    source_content.appendChild(video)
    source_content.appendChild(title)
    video.appendChild(source)
    button_left.appendChild(prev_img)
    button_right.appendChild(next_img)
    prev_img.appendChild(arrow_left)
    next_img.appendChild(arrow_right)

    //fonction de gestion défilement de vidéo au click
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
