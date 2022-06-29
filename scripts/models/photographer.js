// affichage de la zone photographe
class Photographer {
  constructor(data) {
    this.name = data.name
    this.id = data.id
    this.price = data.price
    this.portrait = data.portrait
    this.city = data.city
    this.country = data.country
    this.tagline = data.tagline
  }

  getPhotographerCardDOM() {
    const modalTitle = document.getElementById('modalTitle')
    modalTitle.innerHTML = `Contactez-moi <br/>${this.name}`
    const article = document.createElement('article')
    article.classList.add('photograph-header-page')
    const divInfoPhotograper = document.createElement('div')
    divInfoPhotograper.classList.add('photograph-infos')
    const h1 = document.createElement('h1')
    h1.textContent = this.name
    const pLocation = document.createElement('p')
    pLocation.classList.add('location')
    pLocation.textContent = `${this.country}, ${this.city}`
    const pTagline = document.createElement('p')
    pTagline.classList.add('tagline')
    pTagline.textContent = this.tagline
    const buttonContact = document.createElement('button')
    buttonContact.classList.add('contact-button')
    buttonContact.textContent = 'Contactez-moi'
    buttonContact.setAttribute('aria-label', `Contactez: ${this.name}`)
    buttonContact.setAttribute('onclick', 'displayModal()')
    const img = document.createElement('img')
    img.setAttribute(
      'src',
      `${`assets/samplephotos/PhotographersIDPhotos/${this.portrait}`}`
    )
    img.setAttribute('alt', this.name)
    img.classList.add('photograph-picture')
    article.appendChild(divInfoPhotograper)
    article.appendChild(buttonContact)
    article.appendChild(img)
    divInfoPhotograper.appendChild(h1)
    divInfoPhotograper.appendChild(pLocation)
    divInfoPhotograper.appendChild(pTagline)
    return article
  }

  // affichage du footer avec le total des likes
  getFootercardDOM() {
    const price = document.createElement('div')
    price.classList.add('photographer-price')
    price.textContent = `${this.price}€/jour`
    return price
  }
}
