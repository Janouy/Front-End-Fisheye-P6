async function getMedias() {
    
    fetch('../../data/photographers.json')
    .then((response) => {
        return response.json();
    })
    .then((datas) => {
        const queryString = window.location.search;
        const photographerId = queryString.replace('?', '');
        let allMedias = datas.media;
        let medias = allMedias.map(media => mediasFactory(media));
        const mediasSection = document.querySelector(".medias");
        medias.forEach((media) => {
            if(media.photographerId == photographerId){
                mediasSection.appendChild(media.getUserCardDOM());
            }
            
        });
        
    })
    .catch(err => console.log('==== error ====', err));
            
}

getMedias();