//récupération des médias dans les datas
async function getMedias() {
  fetch('../../data/photographers.json')
    .then((response) => response.json())
    .then((photographers_medias) => {
      const queryString = window.location.search
      const photographerId = queryString.replace('?', '')
      const allMedias = photographers_medias.media
      const mediasSortedById = allMedias.reduce((acc, valCourante) => {
        if (acc.indexOf(valCourante) === -1) {
          if (valCourante.photographerId == photographerId) {
            acc.push(valCourante)
          }
        }
        return acc
      }, [])
      // choix du model de class à executer avec le factory pattern mediasFactory si le media est une photo ou une video
      const medias = mediasSortedById
        .map((media) =>
          mediasFactory(
            media,
            sortingMedias,
            displayTotalLikes,
            displayLightbox
          )
        )
        .sort(compareLikes)
      // choix du model de class à executer avec le factory pattern carouselFactory si le media est une photo ou une video
      const mediasCarousel = mediasSortedById
        .map((media) => carouselFactory(media, sortingMedias))
        .sort(compareLikes)
      const carouselMedia = document.getElementById('lightbox-modal')
      // appel de la balise qui contiendra l'affichage des medias dans la lightbox
      const carouselUl = document.querySelector('.carousel')
      // appel de la balise qui contiendra l'affichage des medias sur la page photographe
      const mediasSection = document.querySelector('.medias')
      // affichage des medias sur la page photographer.html
      function displayMediasPhotographer() {
        medias.forEach((media) => {
          mediasSection.appendChild(media.getUserCardDOM())
          document.getElementById(`liked_${media.id}`)
        })
      }
      displayMediasPhotographer()
      // affichage des medias de la lightbox
      function displayLightbox() {
        mediasCarousel.forEach((media) => {
          const li = document.createElement('li')
          carouselUl.appendChild(li)
          li.appendChild(media.getUserCardDOM())
          li.classList.add('carousel-item')
          li.setAttribute('id', media.id)
          li.setAttribute('aria-hidden', true)
          li.style.display = 'none'
        })
      }
      displayLightbox()
      function openMenu(e) {
        e.preventDefault()
        const dropdownMenu = document.querySelectorAll('.dropdown')
        dropdownMenu.forEach((item) => {
          if (item.classList.contains('hidden')) {
            item.classList.remove('hidden')
            item.classList.add('dropdown-menu')
            document
              .querySelector('.header-dropdown-link svg')
              .setAttribute('transform', 'rotate(180)')
          } else if (item.classList.contains('dropdown-menu')) {
            item.classList.remove('dropdown-menu')
            item.classList.add('hidden')
            document
              .querySelector('.header-dropdown-link svg')
              .setAttribute('transform', '')
          }
        })
      }

      function closeMenu(title) {
        const dropdownMenu = document.querySelectorAll('.dropdown')
        const titleSorting = document.querySelector('.select-sorting-title')
        dropdownMenu.forEach((item) => {
          if (item.classList.contains('dropdown-menu')) {
            item.classList.remove('dropdown-menu')
            item.classList.add('hidden')
            titleSorting.classList.add('border')
            document
              .querySelector('.header-dropdown-link svg')
              .setAttribute('transform', '')
            titleSorting.innerText = title
          }
        })
      }
      document
        .querySelector('.header-dropdown-link')
        .addEventListener('click', openMenu)
      // reload des données à l'incrémentation et tri pour la page photographer et la lightbox
      function sortingMedias(event) {
        const actualTitleSorting =
          document.querySelector('.select-sorting').innerText
        const sortingTitle = document.querySelector('.select-sorting-title')
        mediasSection.innerHTML = ''
        mediasCarousel.forEach(() => {
          carouselMedia.removeChild(carouselMedia.lastChild)
        })
        if (event.target.innerText == 'Titre') {
          medias.sort(compareTitle)
          mediasCarousel.sort(compareTitle)
          closeMenu(event.target.innerText)
          sortingTitle.focus()
        }
        if (event.target.innerText == 'Popularité') {
          medias.sort(compareLikes)
          mediasCarousel.sort(compareLikes)
          closeMenu(event.target.innerText)
          sortingTitle.focus()
        }
        if (event.target.innerText == 'Date') {
          medias.sort(compareDate)
          mediasCarousel.sort(compareDate)
          closeMenu(event.target.innerText)
          sortingTitle.focus()
        }
        event.target.innerText = actualTitleSorting
        displayMediasPhotographer()
        displayLightbox()
      }
      function closeMenuWithMouseLeave() {
        const dropdownMenu = document.querySelectorAll('.dropdown')
        dropdownMenu.forEach((item) => {
          item.classList.contains('dropdown-menu')
          item.classList.remove('dropdown-menu')
          item.classList.add('hidden')
          document
            .querySelector('.header-dropdown-link svg')
            .setAttribute('transform', '')
        })
      }
      const sortingContent = document.querySelector(
        '.header-dropdown-link-content'
      )
      const mediasContent = document.querySelectorAll(
        '.media-photographer-page'
      )
      const contactButton = document.querySelector('.contact-button')
      sortingContent.addEventListener('mouseleave', closeMenuWithMouseLeave)
      mediasContent.forEach((item) =>
        item.addEventListener('focusin', closeMenuWithMouseLeave)
      )
      contactButton.addEventListener('focusin', closeMenuWithMouseLeave)

      function sortsEventHandler(event) {
        if (event.keyCode === 13) {
          sortingMedias(event)
        }
      }
      document
        .querySelectorAll('.select-sorting')
        .forEach((item) => item.addEventListener('keydown', sortsEventHandler))

      // affichage de total des likes
      function displayTotalLikes() {
        let totalLikes = 0
        for (let i = 0; i < medias.length; i++) {
          totalLikes += medias[i].likes
        }
        return totalLikes
      }
    })
    .catch((err) => console.log('==== error ====', err))
}

getMedias()
