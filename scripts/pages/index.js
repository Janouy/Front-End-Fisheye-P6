//récupération des datas phorographes
async function getPhotographers() {
  fetch('../../data/photographers.json')
    .then((response) => response.json())
    .then((datas) => {
      const allPhotographers = datas.photographers
      const photographers = allPhotographers.map(
        (photographer) => new PhotographerFactory(photographer, 'mainPage')
      )
      const photographersSection = document.querySelector(
        '.photographer-section'
      )
      photographers.forEach((photographer) => {
        photographersSection.appendChild(photographer.getPhotographersCardDOM())
      })
    })
    .catch((err) => console.log('==== error ====', err))
}

getPhotographers()
