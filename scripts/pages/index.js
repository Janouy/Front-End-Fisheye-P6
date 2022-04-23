
async function getPhotographers() {
    
    fetch('../../data/photographers.json')
    .then((response) => {
        return response.json();
    })
    .then((datas) => {
        let allPhotographers = datas.photographers;
        const photographers = allPhotographers.map(photographer => new Photographers(photographer))
        console.log(photographers)
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    })
    .catch(err => console.log('==== error ====', err));
            
}

getPhotographers()


    