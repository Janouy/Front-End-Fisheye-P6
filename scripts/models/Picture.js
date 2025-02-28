//affichage des photos sur la page photographer
class Picture {
  constructor(data, sortingMedias, displayTotalLikes, incrThisLike) {
    this.photographerId = data.photographerId
    this.title = data.title
    this.image = data.image
    this.likes = data.likes
    this.likesIncr = data.likes + 1
    this.date = data.date
    this.price = data.price
    this.id = data.id
    this.sortingMedias = sortingMedias
    this.displayTotalLikes = displayTotalLikes
    this.incrThisLike = incrThisLike
    this.liked = false
  }

  getMediaCardDOM() {
    const totalLikes = document.querySelector('.total-likes')
    totalLikes.innerHTML = this.displayTotalLikes()
    const sorts = document.querySelectorAll('.select-sorting')
    sorts.forEach((elt) => elt.addEventListener('click', this.sortingMedias))
    const article = document.createElement('article')
    article.classList.add('media-photographer-page')
    article.setAttribute('aria-hidden', false)
    const linkImg = document.createElement('div')
    linkImg.classList.add('image-section')
    linkImg.setAttribute('data-id', this.id)
    linkImg.setAttribute('role', 'button')
    linkImg.setAttribute('tabindex', 0)
    linkImg.setAttribute(
      'aria-label',
      `${this.title}cliquer pour ouvrir dans la lightbox`
    )
    linkImg.setAttribute('aria-hidden', 'false')
    linkImg.setAttribute('onclick', `displayLightbox(${this.id})`)
    linkImg.addEventListener('keydown', buttonEventHandler)
    linkImg.addEventListener('click', mediasFocus)
    const img = document.createElement('img')
    img.setAttribute(
      'src',
      `${`assets/samplePhotos/${this.photographerId}/${this.image}`}`
    )
    img.setAttribute('alt', this.title)
    img.classList.add('photograph-image')
    const titleAndLikes = document.createElement('div')
    titleAndLikes.classList.add('title-likes-media')
    const title = document.createElement('div')
    title.classList.add('media-title')
    const likes = document.createElement('div')
    likes.classList.add('media-likes')
    likes.setAttribute('id', `liked_${this.id}`)
    const likesOfMedia = document.createElement('span')
    likesOfMedia.classList.add('likesOfMedia')
    likesOfMedia.textContent = this.likes
    const like = document.createElement('button')
    like.classList.add('like')
    const heart = document.createElement('i')
    //gestion des likes
    if (this.liked == false) {
      heart.classList.add('fa-regular', 'fa-heart')
      like.setAttribute(
        'aria-label',
        `Cliquez pour liker la photo${this.title}`
      )
      like.addEventListener(
        'click',
        this.incrThisLike.bind(this, likesOfMedia, totalLikes, heart, like)
      )
    }
    if (this.liked == true) {
      like.setAttribute('aria-label', `Vous avez déjà liker${this.title}`)
      heart.classList.add('fa-solid', 'fa-heart')
    }
    title.textContent = this.title
    article.appendChild(linkImg)
    linkImg.appendChild(img)
    article.appendChild(titleAndLikes)
    titleAndLikes.appendChild(title)
    titleAndLikes.appendChild(likes)
    likes.appendChild(likesOfMedia)
    likes.appendChild(like)
    like.appendChild(heart)
    return article
  }
}
