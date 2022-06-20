//récupération des data photographe
async function getPhotographer() {
  fetch('../../data/photographers.json')
    .then((response) => response.json())
    .then((photographer_infos) => {
      const queryString = window.location.search
      const photographId = queryString.replace('?', '')
      const allPhotographers = photographer_infos.photographers
      let foundId = -1
      for (let i = 0; i < allPhotographers.length; i++) {
        if (allPhotographers[i].id == photographId) {
          foundId = i
        }
      }
      const photographer = new PhotographerFactory(
        allPhotographers[foundId],
        'photographerPage'
      )
      const photographerSection = document.querySelector('.photograph-header')
      photographerSection.appendChild(photographer.getUserCardDOM())
      const photographerFooter = document.querySelector('.footer')
      photographerFooter.appendChild(photographer.getUsercardDOMFooter())
    })
    .catch((err) => console.log('==== error ====', err))
}

getPhotographer()
