class Video {
  constructor(data, sortingMedias, displayTotalLikes, incrThisLike) {
    this.photographerId = data.photographerId
    this.title = data.title
    this.video = data.video
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
    for (const sort of sorts) {
      sort.addEventListener('click', this.sortingMedias)
    }
    const article = document.createElement('article')
    article.classList.add('media_photographer_page')
    article.setAttribute('aria-hidden', false)
    const linkVideo = document.createElement('div')
    linkVideo.classList.add('video-section')
    linkVideo.setAttribute('role', 'button')
    linkVideo.setAttribute('tabindex', 0)
    linkVideo.setAttribute('data-id', this.id)
    linkVideo.setAttribute(
      'aria-label',
      `${this.title}cliquer pour ouvrir dans la lightbox`
    )
    linkVideo.setAttribute('onclick', `displayLightbox(${this.id})`)
    linkVideo.addEventListener('keydown', buttonEventHandler)
    linkVideo.addEventListener('click', mediasFocus)
    const video = document.createElement('video')
    video.classList.add('photograph-video')
    const source = document.createElement('source')
    source.setAttribute(
      'src',
      `${`assets/samplePhotos/${this.photographerId}/${this.video}`}`
    )
    source.setAttribute('type', 'video/mp4')
    source.setAttribute('autoplay', false)
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
    if (this.liked == false) {
      heart.classList.add('fa-regular', 'fa-heart')
      like.setAttribute(
        'aria-label',
        `Cliquez pour liker la vidéo${this.title}`
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
    article.appendChild(linkVideo)
    linkVideo.appendChild(video)
    video.appendChild(source)
    article.appendChild(titleAndLikes)
    titleAndLikes.appendChild(title)
    titleAndLikes.appendChild(likes)
    likes.appendChild(likesOfMedia)
    likes.appendChild(like)
    like.appendChild(heart)
    return article
  }
}
