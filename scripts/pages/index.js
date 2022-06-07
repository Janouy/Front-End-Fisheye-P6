async function getPhotographers() {
    fetch('../../data/photographers.json')
        .then((response) => {
            return response.json()
        })
        .then((datas) => {
            let allPhotographers = datas.photographers;
            const photographers = allPhotographers.map(photographer => new photographerFactory(photographer, 'mainPage'))
            const photographersSection = document.querySelector(".photographer_section");
            photographers.forEach((photographer) => {
                photographersSection.appendChild(photographer.getUserCardDOM());
            });
        })
        .catch(err => console.log('==== error ====', err));

}

getPhotographers()

