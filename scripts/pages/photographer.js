
async function getPhotographer() {
    
    fetch('../../data/photographers.json')
    .then((response) => {
        return response.json();
    })
    .then((datas) => {
        const queryString = window.location.search;
        const photographId = queryString.replace('?', '');
        let allPhotographers = datas.photographers;
        console.log(allPhotographers);
        let foundId = -1;
        for(let i=0; i<allPhotographers.length; i++) {
            if(allPhotographers[i].id == photographId) {
                foundId = i;
            }
            console.log(foundId);
            
        }
        const photographer = new Photographers(allPhotographers[foundId])
        const photographersSection = document.querySelector(".one_photographer_section");
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM2();
        photographersSection.appendChild(userCardDOM);
    })
    .catch(err => console.log('==== error ====', err));
            
}

getPhotographer();