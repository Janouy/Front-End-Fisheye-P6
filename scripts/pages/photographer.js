
async function getPhotographer() {
    
    fetch('../../data/photographers.json')
    .then((response) => {
        return response.json();
    })
    .then((datas) => {
        const queryString = window.location.search;
        const photographId = queryString.replace('?', '');
        let allPhotographers = datas.photographers;
        let foundId = -1;
        for(let i=0; i<allPhotographers.length; i++) {
            if(allPhotographers[i].id == photographId) {
                foundId = i;
            }
        }
        const photographer = new Photographer(allPhotographers[foundId])
        const photographersSection = document.querySelector(".photograph-header");
        photographersSection.appendChild(photographer.getUserCardDOM());
    })
    .catch(err => console.log('==== error ====', err));
            
}

getPhotographer();