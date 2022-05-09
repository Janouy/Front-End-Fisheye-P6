
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
            
            const photographer = new photographerFactory(allPhotographers[foundId], 'photographerPage')
            const photographerSection = document.querySelector(".photograph-header");
            photographerSection.appendChild(photographer.getUserCardDOM());
            const photographerFooter = document.querySelector(".footer");
            photographerFooter.appendChild(photographer.getUsercardDOMFooter());
        })
        .catch(err => console.log('==== error ====', err));
            
}

getPhotographer();