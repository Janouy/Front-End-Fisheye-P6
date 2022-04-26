
async function getPhotographers() {
    
    fetch('../../data/photographers.json')
    .then((response) => {
        return response.json();
    })
    .then((datas) => {
        let allPhotographers = datas.photographers;
        const photographers = allPhotographers.map(photographer => new Photographers(photographer))
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
            document.querySelectorAll(".photograph_item").forEach(data => data.addEventListener('click', function() {
                const test = data.src;
                const queryString = window.location.href;
                const newData = test.replace(queryString +'assets/photographers/', '');
                let foundId = -1;
                for(let i=0; i<photographers.length; i++) {
                    if(photographers[i].portrait === newData) {
                        foundId = i;
                    }
                }
            }))
        });
    })
    .catch(err => console.log('==== error ====', err));
            
}

getPhotographers()

